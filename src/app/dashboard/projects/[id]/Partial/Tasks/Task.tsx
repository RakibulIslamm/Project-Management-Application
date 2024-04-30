import React from "react";

const Task = () => {
  return (
    <div>
      <h4>Create wireframes</h4>
      <p>Design wireframes for the new website layout.</p>
      <p>Deadline: {new Date(1687449600 * 1000).toUTCString()}</p>
      <div></div>
    </div>
  );
};

export default Task;
