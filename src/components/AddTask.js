import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/TaskActions';



const AddTask = () => {
  const [task,setTask] = useState("");
  const dispatch = useDispatch();
  const handelSubmit = (e)=>{
    e.preventDefault();
    if (task) {
      dispatch(addTask(task));
      setTask("");
    }
    else{
      alert("Please enter a task");
    }
  }
  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
      <button onClick={handelSubmit}>Add</button>
    </div>
  )
}

export default AddTask