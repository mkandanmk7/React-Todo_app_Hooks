import React from "react";
import { useState } from "react/cjs/react.development";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]); //multiple todo so use [] here;

  //add todo () ; todo param from child comp;
  const addTodo = (todo) => {
    console.log(todo);
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    console.log(newTodos);

    setTodos(newTodos);

    console.log(...todos);
  };

  //add todo
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // delete the todo with id
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos); //change only the updated todo .
  };

  return (
    <div>
      <h1>What's the plan Today !</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
