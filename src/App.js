import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";
import InputForm from "./components/InputForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div className="h-screen grid grid-cols-4 w-full grid-rows-4 auto-rows-fr p-0 m-0">
      <div className="col-span-3 row-span-3 h-full p-8 relative">
        <h1 className="text-4xl font-semibold text-center text-gray-700 my-4">
          API Tester
        </h1>
        <div className="text-center my-8 grid grid-rows-4 f-full ">
          <div className=" w-4/6 mx-auto row-span-3 h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-white">
            <TaskList />
          </div>
          <div className="row-span-1 mt-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-xl my- py-2 px-4 rounded"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
      <InputForm visible={showModal} onClose={handleOnClose} />
      <About />
      <Footer />
    </div>
  );
}

export default App;
