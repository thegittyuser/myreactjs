import { useState } from "react";
import "../hooks/css/list.css";

function List() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]); // array for multiple tasks

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // prevent adding empty tasks
    setTodo([...todo, input.trim()]);
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
            <ul>
              {todo.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
