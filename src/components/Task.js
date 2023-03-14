import React from "react";
import axios from "axios";
import { FaCheck, FaPen, FaTrashAlt } from "react-icons/fa";

const Task = (props) => {
  const handleDelete = () => {
    axios
      .delete(`https://test-api-demo.onrender.com/content?id=${props.task_id}`)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <li className="w-full  items-center justify-around h-content grid grid-cols-10 mb-4">
      <button className="col-span-1 text-white font-bold bg-gray-800 h-full flex items-center justify-center text-2xl">
        <h3>{props.index + 1}.</h3>
      </button>
      <button className="text-xl col-span-6 flex items-start bg-gray-200 ">
        <p className="p-4">{props.content}</p>
      </button>
      <button
        className="col-span-1 h-full bg-blue-500 hover:bg-blue-600 hover:text-4xl text-white flex items-center w-18 justify-center text-2xl cursor-pointer duration-150"
        onClick={handleDelete}
      >
        <FaCheck />
      </button>
      <button className="col-span-1 h-full bg-green-500 hover:bg-green-600 hover:text-4xl text-white flex items-center w-18 justify-center text-2xl cursor-pointer duration-150">
        <FaPen />
      </button>
      <button
        className="col-span-1 h-full bg-red-500 hover:bg-red-600 hover:text-4xl text-white flex items-center w-18 justify-center text-2xl cursor-pointer duration-150"
        onClick={handleDelete}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default Task;
