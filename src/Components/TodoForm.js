import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.onSubmit({
    //   id: Math.floor(Math.random() * 1000),
    //   text: input,
    // });

    setInput("");
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
        />
        <button className="todo-button">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
