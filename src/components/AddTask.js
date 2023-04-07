import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions/TaskActions';
import { Button, FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


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
    <div className='input_group' style={{width:"400px"}}>
        <FloatingLabel style={{display:"flex", gap:"10px"}}
        label="Enter Your New Task"
        className='mb-3 w-10 h-20'
        value={task}
         onChange={(e) => setTask(e.target.value)}
      >
        
        <Form.Control type="text" placeholder="New task"/>
        <Button className='btn ' onClick={handelSubmit}>Add</Button>
      </FloatingLabel>
     
    </div>
  )
}

export default AddTask