import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('https://task-list-api-c17.onrender.com/tasks')
      .then((response) => {
        const initialTasks = [];
        response.data.forEach(task => {
          initialTasks.push(task);
        });
        setTasks(initialTasks);
        console.log('Success call', response.data);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);
  

  // Update is complete for each task: IsComplete
  const markComplete = (taskId) => {
    
    axios.patch(`https://task-list-api-c17.onrender.com/tasks/${taskId}/mark_complete`)
    .then((response) => {
      console.log('success!', response.data);
    })
    .catch( (error) => {
      console.log('error', error);
    });

  };
      /*
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          task.isComplete = !task.isComplete;
          return { ...task };
        } else {
          return { ...task };
        }
      });

    setTasks(updatedTasks);
    });
  };

  */

  const updateDeleteTask = (taskId) => {
    axios.delete(`https://task-list-api-c17.onrender.com/tasks/${taskId}`)
    .then((response) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id !== taskId) {
          return { ...task};
        }
      });

      const filteredUpdatedData =  updatedTasks.filter(function (element) {
        return element !== undefined;
      });
      console.log('success', response.data);
      setTasks(filteredUpdatedData);
    })
  
    .catch((error) => {
      console.log('could not delete task', error, error.response);
    });
  };

  return (
  <div className="App">
    <header className="App-header">
      <h1>Ada&apos;s Task List</h1>
    </header>
    <main>
      <div>{<TaskList
        tasks={tasks}
        //updateComplete={updateComplete}
        markComplete={markComplete}
        updateDeleteTask={updateDeleteTask}
      />}</div>
    </main>
  </div>
);
};

export default App;
