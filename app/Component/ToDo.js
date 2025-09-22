import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">To-Do App</h1>

      <div className="flex space-x-2">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          className="px-4 py-2 border rounded-lg "
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="mt-6 w-80">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white shadow p-3 rounded-lg mb-2"
          >
            <span>{todo}</span>
            <button
              onClick={() => removeTask(index)}
              className="text-green-500 hover:text-green-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
