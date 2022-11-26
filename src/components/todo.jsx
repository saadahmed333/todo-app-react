import "./todo.css";
import "./firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot
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
  let uids;
  let ids = [];
  let arr = [];
  // useEffect(() => {
    window.onload = fetchData = async () => {
      const q = query(collection(db, "Todo"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          arr.push(doc.data().todos);
          uids = doc.id;
          console.log(doc.data().todos)
        });
          setlist(arr);
      });
    }
    // window.onload = fetchData();
    // }, []);

  // const [delt, setdelt] = useState(ids);
  const Deletll = () => {
    // const q = query(collection(db, "Todo"),);
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   querySnapshot.forEach(async(doc) => {
    //     await deleteDoc(doc(db, "Todo", doc.id));
    //   });
    // });
  }
  return (
    <>
      <div className="todos">
        <div className="todos-div">
          <div className="todosInput">
            <input type="text" ref={todoo} />
            <Button onClick={addTodo} />
            <button onClick={() => Deletll()}>Delete All</button>
          </div>
          <ul className="todo-Show">
            {list.map((val, ind) => (
              <div key={ind}>
                <li>
                  <span>{val}</span>
                  <button>Delete Todo</button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export { Todo };
