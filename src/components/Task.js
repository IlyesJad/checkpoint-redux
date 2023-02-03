import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { completeTask, editTask } from '../redux/actions/TaskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(task.discription);
  const handelEdit = (e) => {
    e.preventDefault();
    let editedTask = {
      id: task.id,
      discription: editValue,
      isDone: false
    }
    dispatch(editTask(editedTask));
    setEdit(false);
  }

  return (
    <div>
      <div className={task.isDone ? "todo-box completed" : "todo-box"} >
       { edit ? (
        <form onSubmit={handelEdit}>
          <input type="text" 
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)} />
          <button>Save</button>
        </form>
       )
        : (
        <div>
          <p onClick={()=>dispatch(completeTask(task))}>{task.discription}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
       )
      } 
      </div>
      <button onClick={() => dispatch(completeTask(task))}>Done/Not Done</button>
    </div>
  )
}
 
export default Task