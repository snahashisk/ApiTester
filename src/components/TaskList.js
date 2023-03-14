import React, { useState, useEffect } from "react";
import Task from "./Task";

const TaskList = () => {
  const [taskData, setTaskData] = useState([]);
  const [taskState, setTaskState] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/content")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTaskData(data));
  }, [taskState]);

  const taskDataLength = Object.keys(taskData).length;
  if (!taskDataLength) {
    return (
      <div className="">
        <h1 className="text-3xl text-red-400 my-4">
          No Task Data Available Right Now!
        </h1>
        <p className="text-lg">
          Click the{" "}
          <span className="text-blue-500 cursor-pointer">Create Task</span>{" "}
          button to create a task.
        </p>
      </div>
    );
  }
  return (
    <ul>
      {taskData.map((item, index) => (
        <Task
          key={item.id}
          index={index}
          task_id={item.id}
          content={item.content}
        />
      ))}
    </ul>
  );
};

export default TaskList;
