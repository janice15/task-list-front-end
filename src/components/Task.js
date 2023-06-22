import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {
  const [complete, setComplete] = useState(props.isComplete);
  const buttonClass  = complete ? 'tasks__item__toggle--completed green': 'red';
  
  const toggleComplete = () => {
    setComplete(!complete);
    props.markComplete(props.id);
  };

  const toggleDelete = () => {
    props.updateDeleteTask(props.id);
  };


  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={toggleComplete}
      >
        {props.title}
      </button>
      <button 
        className="tasks__item__remove button" 
        onClick={toggleDelete}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  // updateComplete: PropTypes.func,
  updateDeleteTask: PropTypes.func,
  markComplete: PropTypes.func
};

export default Task;
