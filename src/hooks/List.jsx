import { useState } from "react";
import "../hooks/css/list.css";
function List() {
  const [input, setInput] = useState("");
  //   const [todo, setTodo] = useState("List"); // for testing purpose
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input == "") {
      alert("Field Required");
      return;
    }
    setTodo([...todo, input]);
    setInput("");
  };

  return (
    <>
      <div className="list-box">
        <div className="todo-app">
          <form className="inputbtn" onSubmit={handleSubmit}>
            <input
              type="text"
              name="task"
              id="task"
              placeholder="Enter Task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Add Task</button>
          </form>
          <div className="task-todo">
              {todo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
