import "./todo.css";
import "./firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
import { db } from "./firebaseConfig";
import { useRef, useState, useEffect } from "react";
import { Button } from "./button";

function Todo() {
  const todoo = useRef();
  const [list, setlist] = useState([]);

  const addTodo = async () => {
    await addDoc(collection(db, "Todo"), {
      todos: todoo.current.value,
    });
    todoo.current.value = "";
    console.log("Submit");
  };

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "Todo")), (querySnapshot) => {
      let arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data().todos);
      });
      setlist(arr);
    });
    return () => {
      unsub();
    };
  }, []);

  const DeleteAll = async () => {
    const q = query(collection(db, "Todo"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (eachdoc) => {
      await deleteDoc(doc(db, "Todo", eachdoc.id));
    });
  };

  const deletedTodo = async (val) => {
    const q = query(collection(db, "Todo"), where("todos", "==", val));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (eachdoc) => {
      await deleteDoc(doc(db, "Todo", eachdoc.id));
    });
  };
  const Update = async (val) => {
    let Edit = prompt("Write a Value");
    console.log(Edit);
    const q = query(collection(db, "Todo"), where("todos", "==", val));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (eachdoc) => {
      const washingtonRef = doc(db, "Todo", eachdoc.id);
      await updateDoc(washingtonRef, {
        todos: Edit,
      });
    });
  };
  
  return (
    <>
    <div className="todos">
      <div className="todos-div">
        <div className="todosInput">
          <input type="text" ref={todoo} />
          <Button onClick={addTodo} />
          {/* <button onClick={() => Deletll()}>Delete All</button> */}
        </div>
        <ul className="todo-Show">
          {list.map((val, ind) => (
            <div key={ind}>
              <li>
                <div className="todos-list">
                  <span className="inde">{ind + 1}</span>
                  <span className="value">{val}</span>
                </div>
                <div className="Buttons">
                  <button onClick={() => Update(val)}>Edit</button>
                  <button onClick={() => deletedTodo(val)}>Delete</button>
                </div>
              </li>
            </div>
          ))}
        </ul>
        <div className="add-todo">
          <button className="add-todo-Btn" onClick={() => DeleteAll()}>
            Delete All
          </button>
        </div>
      </div>
    </div>
    <div></div>
  </>
);
}
export { Todo };
