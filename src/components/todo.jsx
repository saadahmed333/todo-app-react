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
    console.log("Submit");
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "Todo"));
      let arr = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        arr.push(doc.data().todos)
      });
      setlist(arr)
    };
    fetchData()
  }, [list]);
  
  return (
    <>
      <div>
        <input type="text" ref={todoo} />
        <Button onClick={addTodo} />
      </div>
      <div>
        {list.map((val, ind) => (
          <div key={ind}>
            <p>{val}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export { Todo };
