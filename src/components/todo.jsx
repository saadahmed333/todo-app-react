import { useState } from "react";
import { Button } from "./button";



function Todo() {
    const [list, setlist] = useState(["ghous"]);
    console.log(list)
    const addTodo = () => {
    
    }
  return (
    <>
    <div>
      <input type="text"
      />
      <Button />
    </div>
   <ul>
    {
        list.map((val,ind)=> {
            <li key={ind}>{val}</li>
        })
    }
   </ul>
    </>
  );
}

export { Todo };
