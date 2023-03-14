import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

function InputForm({ onClose, visible }) {
  const [value, setValue] = useState("");
  if (!visible) return null;

  const createTodo = async (content) => {
    try {
      const response = await axios.post(
        "hhttps://test-api-demo.onrender.com/content",
        {
          content,
        }
      );
      console.log(response);
      return response;
    } catch (error) {
      // throw new Error(error.response);
    }
  };

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (value) {
      createTodo(value);
      onClose();
      setValue("");
    }
  }

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-sm h-screen w-full flex justify-center items-center shadow-lg duration-200">
      <form className=" flex justify-center items-center flex-col border-2 p-6 bg-gray-300 rounded-md relative">
        <h1 className="mb-5 text-xl">Write the task here</h1>
        <div
          className="absolute top-3 right-3 text-2xl text-gray-500 cursor-pointer"
          onClick={onClose}
        >
          <IoCloseSharp />
        </div>

        <label>
          <textarea
            rows="4"
            cols="50"
            type="text"
            value={value}
            onChange={handleChange}
            className="outline-0 rounded-md p-4"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white text-xl mt-4 py-2 px-4 rounded "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;
