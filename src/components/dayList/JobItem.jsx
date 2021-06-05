import React from 'react';

 const JobItem = ({...props}) => {
    return (
        <div>
            <p>{props.props.job.todo}</p>
            <button onClick={props.onClick}>Delete</button>
        </div>
    )
}


export default JobItem