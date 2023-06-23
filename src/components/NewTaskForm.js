import React from 'react';
import PropTypes from 'prop-types';
import { useState} from 'react';

const INITIAL_FORM_DATA = {
    title: "",
    id:0,   
}

const NewTaskForm = (props) => {
    const [taskFormData, setTaskFormData] = useState(INITIAL_FORM_DATA);
   
    const anInputChanged = (event) => {
        console.log(event);

        if (event.target.title === 'id' && event.target.value) {
            return
        }
            
    };


    return (
        <div>
            <form>
                <label htmlFor="taskTitle">Title:</label>
                <input 
                id="taskId" 
                title="title"
                /> 
                

            </form>
            
        </div>
    )
};

NewTaskForm.Proptypes = {
    createNewTask: PropTypes.func
}





export default NewTaskForm;