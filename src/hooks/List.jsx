import "../hooks/css/list.css";
function List() {

    

    return (
    <>
      <div className="list-box">
        <div className="todo-app">
          <input type="text" name="task" id="task" placeholder="Enter Task" />
          <input type="submit" value="Add Task"/>
        </div>
      </div>
    </>
  );
}

export default List;
