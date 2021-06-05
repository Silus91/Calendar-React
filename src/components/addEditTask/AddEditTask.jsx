import React, { useState, useContext, useEffect } from "react";
import { Button } from "../button/Button";
import TextInput from '../textInput/TextInput'
import M from "materialize-css";
import { ADD_JOB, EDIT_JOB } from "../../types/types";
import { StoreContext } from '../../context/StoreContext';


const AddEditTask = ({ ...props}) => {
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    M.AutoInit();
    if (props.job) {
      setState({
        ...state,
        id: props.job.id,
        todo: props.job.todo,
        dayId: props.job.dayId,
      });
    }
  }, []);

  console.log(props.job)

  const [state, setState] = useState({
    todo: "",
    id: "",
    dayId: "",
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    }); 

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newJob = dataMap();
    if(props.job) {
      dispatch({ type: EDIT_JOB, payload: newJob, id: newJob.id });
    } else {
      dispatch({ type: ADD_JOB, payload: newJob });
    }

    setState({ id: "", todo: "", dayId: "" });
  };

  const dataMap = () => {
    const newJob = {
      id: new Date().valueOf(),
      dayId: props.id,
      todo: state.todo
    };
    if(props.job){
      newJob.id = props.job.id
    }
    return newJob;
  };

  return (
    <div>
      <a
        className='btn modal-trigger'
        data-target={props.id}
      >
        {props.job ? "Edit Job" : "Add Job" }
      </a>
      <div id={props.id} className='modal'> 
       <form onSubmit={handleSubmit}>
          <div className='modal-content'>
            <h4> {props.job ? "Edit Job" : "Add  Job"}</h4> 
            <TextInput
              type='text'
              name='todo'
              className='validate'
              value={state.todo}
              onChange={handleChange}
              htmlFor='Job to DO'
              label='Job to Do'
            />
            <div className='modal-footer'>
              <Button
                type='submit'
                className="btn teal darken-2 z-depth-2 modal-close"
                text='submit'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditTask;
