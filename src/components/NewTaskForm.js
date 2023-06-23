import React from 'react';
import PropTypes from 'prop-types';
import { useState} from 'react';

const INITIAL_FORM_DATA = {
    title: '',
    id:0,   
};

const NewTaskForm = (props) => {
    const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_DATA);

    const anInputChanged = (event) => {
        console.log(event);

        if (event.target.title === 'id' && event.target.value) {
            return
        }
        
        const newTaskFormData = {
            ...taskFormData,
            [event.target.name]: event.target.value
        };
        setTaskFormData(newTaskFormData);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        props.createNewTask(taskFormData);
        setTaskFormData(INITIAL_FORM_DATA);
    };


    return (
        <div>
            <form className='stack' onSubmit={handleFormSubmit}>
                <label htmlFor="taskTitle">Title:</label>
                <input 
                    id="taskId" 
                    name='title'
                    type="text"
                    value={ taskFormData.title}
                    onChange={ anInputChanged} />
                <label htmlFor="taskTitle">id:</label>
                <input 
                    id="taskId" 
                    name='id'
                    type="number"
                    value={ taskFormData.id}
                    onChange={ anInputChanged} />
                <input type='submit' value='Add new Task' />
            </form>
        </div>
    )
};

NewTaskForm.Proptypes = {
    createNewTask: PropTypes.func
};

export default NewTaskForm;