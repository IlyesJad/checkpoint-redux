import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { completeTask, deleteTask, editTask } from '../redux/actions/TaskActions';

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
    <div style={{width:"500px", height:"60px", borderBottom:"solid 2px black"}}>
      <div className={task.isDone ? "todo-box completed" : "todo-box"} >
       { edit ? (
        <form className="tasks"  onSubmit={handelEdit}>
          <input type="text" 
          style={{textAlign:"center"}}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)} />
          <button>Save</button>
        </form>
       )
        : (
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <div>
          <input type='checkbox' style={{textAlign:"center"}} onClick={() => dispatch(completeTask(task))}/>
          </div>
          <p onClick={()=>dispatch(completeTask(task))}>{task.discription}</p>
          <div>
          <span onClick={() => setEdit(true)}><Icon style={{fontSize:"25px" , color:"blue"}} icon={edit2} /></span>
          <span onClick={()=>dispatch((deleteTask(task.id)))}><Icon style={{color:"red"}} icon={trash} /></span>
          </div>
        </div> 
       )
      } 
      </div>
      
    </div>
  )
}
 
export default Task