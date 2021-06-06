import React, { useState, useContext, useEffect } from "react";
import { Button } from "../button/Button";
import TextInput from '../textInput/TextInput'
import M from "materialize-css";
import { ADD_JOB } from "../../types/types";
import { StoreContext } from '../../context/StoreContext';

const AddTask = (props) => {
  const { dispatch } = useContext(StoreContext);

  const [state, setState] = useState({
    todo: ""
  });

  useEffect(() => {
    M.AutoInit(); 
  }, []);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });  };

  const dataMap = () => {
    const newJob = {
      id: new Date().valueOf(),
      dayId: props.id,
      todo: state.todo
    };
    return newJob;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newJob = dataMap();
      dispatch({ type: ADD_JOB, payload: newJob });
    setState({ ...state, todo: "" });
  };

  return (
    <div>
      <button
        className='btn modal-trigger'
        data-target={props.id}
      >
        Add Job
      </button>
      <div id={props.id} className='modal'> 
       <form onSubmit={handleSubmit}>
          <div className='modal-content'>
            <h4>Add Job</h4> 
            <TextInput
              type='text'
              name='todo'
              className='validate'
              value={state.todo}
              onChange={handleChange}
              htmlFor='Job to Do'
              label='Job to Do'
            />
            <div className='modal-footer'>
              <Button className={
                  state.todo <= 0
                    ? "btn disabled"
                    : "btn teal darken-2 z-depth-2 modal-close"
                }
                text='submit'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
