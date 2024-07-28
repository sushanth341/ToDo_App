import React, { useState } from 'react';

const ToDoList = ({ tasks, updateTask, deleteTask, toggleEdit }) => {
  const [message, setMessage] = useState('');

  const handleUpdateTask = (index, value) => {
    updateTask(index, value);
    setMessage('Task updated successfully!');
    clearMessageAfterDelay();
  };

  const handleDeleteTask = (index) => {
    deleteTask(index);
    setMessage('Task deleted successfully!');
    clearMessageAfterDelay();
  };

  const handleToggleEdit = (index) => {
    toggleEdit(index);
    setMessage('');
  };

  const clearMessageAfterDelay = () => {
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.isEditing ? (
              <input 
                type="text" 
                defaultValue={task.text} 
                onBlur={(e) => handleUpdateTask(index, e.target.value)} 
              />
            ) : (
              <span>{task.text}</span>
            )}
            <button 
              onClick={() => handleToggleEdit(index)} 
              style={{ backgroundColor: task.isEditing ? 'green' : '' }}
            >
              {task.isEditing ? 'Save' : 'Edit'}
            </button>
            <button 
              onClick={() => handleDeleteTask(index)} 
              style={{ backgroundColor: 'red', color: 'white' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {message && <div className="popup">{message}</div>}
    </div>
  );
};

export default ToDoList;
