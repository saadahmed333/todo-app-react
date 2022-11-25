import "./todo.css";
import "./firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
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
    const fetchData = async () => {
      const q = query(collection(db, "Todo"));
      let arr = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arr.push(doc.data().todos);
      });
      setlist(arr);
    };
    fetchData();
  }, [list]);

  // const Deletll =  async () => {
  //   console.log("saad")
  //   await deleteDoc(doc(db, "Todo"));
  // }
  return (
    <>
      <div className="todos">
        <div className="todos-div">
          <div className="todosInput">
            <input type="text" ref={todoo} />
            <Button onClick={addTodo} />
            <button>Delete All</button>
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
