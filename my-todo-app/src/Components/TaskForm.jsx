import React, { useState } from "react";
import PropTypes from "prop-types";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        placeholder="Enter a task ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 w-2xs border border-gray-300 rounded-l-md"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded-r-md">
        Add
      </button>
    </form>
  );
};
TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskForm;
