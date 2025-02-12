import React from "react";
import PropTypes from "prop-types";

const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className="flex items-center justify-between p-2 bg-white shadow-md mb-2 rounded">
      <span
        className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
        ❌
      </button>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default TaskItem;
