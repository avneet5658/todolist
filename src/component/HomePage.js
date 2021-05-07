import moment from "moment";
import React, { useState } from "react";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleAddTodo = () => {
    const tempFilter = todos.filter((data) => data === currentTodo);
    if (!currentTodo.length > 0) {
      alert("Value is empty");
    } else if (tempFilter.length > 0) {
      alert("Entry already exist or ");
    } else {
      let tempTodos = [...todos];
      tempTodos.push(currentTodo);
      setTodos(tempTodos);
    }
  };
  const handleDelete = (index) => {
    let tempTodos = [...todos];
    tempTodos.splice(index, 1);
    setTodos(tempTodos);
  };
  return (
    <div className="container">
      <center>
        <h1>Your To-Dos</h1>
      </center>
      {todos}
      <div className="row">
        <div className="col-lg-2 col-sm-0"></div>
        <div className="col-lg-8 col-sm-12 p-2 p-lg-0">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your to-do"
            onChange={(e) => setCurrentTodo(e.target.value)}
          />
        </div>
        <div className="col-lg-2 col-sm-12">
          <button className="btn btn-warning" onClick={handleAddTodo}>
            Add To do
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <table className="table rounded">
            <thead className="bg-success">
              <tr>
                <th>#</th>
                <th>To-do</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={index}>
                  {console.log(todo)}
                  <th>{index + 1}</th>
                  <td>{todo}</td>
                  <td>{moment().format("DD-MM-YYYY")}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default HomePage;
