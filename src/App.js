import { useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

const App = () => {
  const [tasks, addTasks] = useState([]);
  const [input, setInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    addTasks([...tasks, input]);
    setInput("");
  };

  const deleteHandler = (index) => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    addTasks(storedTasks);
  };

  return (
    <div className="App">
      <h1>Add Tasks</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text "
          value={input}
          placeholder="add new tasks"
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></input>
        <button onClick={submitHandler}>Add</button>

        {tasks.map((task, index) => (
          <Todo
            key={task}
            index={index}
            task={task}
            deleteHandler={deleteHandler}
          />
        ))}
      </form>
    </div>
  );
};

export default App;

