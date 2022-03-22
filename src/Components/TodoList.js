import React, { useState } from "react";
import ToDoForm from "./TodoForm";

function ToDoList() {
  const [todo, setTodos] = useState([]);

  const addToDo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.test)) {
      return;
    }

    const newToDos = [todo, ...todo];

    setTodos(newToDos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.test)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todo].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeToDo = (id) => {
    let updatedtoDos = todo.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedtoDos);
  };

  return (
    <div>
      <h1>What is Your Plan for Today?</h1>
      <TodoForm onSubmit={addToDo} />
      <toDo
        todos={todo}
        completeToDo={completeToDo}
        removeToDo={removeTodo}
        updateTodo={removeTodo}
      />
    </div>
  );
}

export default ToDoList;
