import React, { useState, useRef, useEffect } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  //useRef();
  const inputRef = useRef();

  // useEffect(); for focus
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // onsubmit from  parent todoList comp
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput(""); // reset the input after submiting
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          value={input}
          name="text"
          placeholder="Add a todo"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
