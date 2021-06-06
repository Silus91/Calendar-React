import React, { useEffect, useContext } from "react";
import AddTask from '../addTask/AddTask';
import { StoreContext } from '../../context/StoreContext';
import { DELETE_JOB } from '../../types/types';
import './dayList.css';
import M from "materialize-css";

const DayList = ({ ...props}) => {
  const { store, dispatch } = useContext(StoreContext);

  useEffect(() => {
      M.AutoInit();
  }, []);

  const deleteJob = (id) => {
    return dispatch({
      type: DELETE_JOB,
      payload: id,
    });
  }

  const filteredJobs = store.jobs.filter((job) => job.dayId === props.id);

  return (
    <div>
      <h3>List of jobs for {props.day}</h3>
      <AddTask id={props.id}/>
      <ul>
        {filteredJobs.map((job) => {
            return (
              <li className="card" key={job.id}>
                <div className="flow-text">{job.todo}</div>   
                <button className="btn red" onClick={() => deleteJob(job.id)}>Delete</button>
             </li>
            )
        })}
      </ul>
    </div>
  );
};

export default DayList;
