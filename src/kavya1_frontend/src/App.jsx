import React, { useState } from 'react';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <div>
        <h2>Task List</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <span>{task.completed ? 'Completed' : 'Pending'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
