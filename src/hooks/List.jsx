import { useState } from "react";
import "../hooks/css/list.css";

function List() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input == "") {
      alert("Please enter a task"); // alert if input is empty
      return; // prevent empty tasks
    }
    setTodos([...todos, input]); // add new task to list
    setInput(""); // clear input
  };
  return (
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
        <ul className="task-todo">
          {todos.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
