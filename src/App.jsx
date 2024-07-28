import React, { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, isEditing: false }]);
      setTaskInput("");
    }
  };

  const updateTask = (index, newText) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, text: newText, isEditing: false } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleEdit = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, isEditing: !task.isEditing } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <h2>Add todo activites to have a progressive day</h2>

      <input 
        type="text" 
        value={taskInput} 
        onChange={(e) => setTaskInput(e.target.value)} 
      />
      <button onClick={addTask}>Add Task</button>
      <ToDoList 
        tasks={tasks} 
        updateTask={updateTask} 
        deleteTask={deleteTask} 
        toggleEdit={toggleEdit} 
      />
    </div>
  );
}

export default App;

