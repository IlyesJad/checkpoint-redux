import React, { useState } from 'react'
import Task from './Task'
import { Button } from 'react-bootstrap';

const ListTask = ({ tasks }) => {
  const [filter,setFilter] = useState("All");
  return (
    <div >
      <div>
        <div style={{display: "inline-flex",gap: "10px",margin: "15px"}}>
        <Button onClick={()=> setFilter("All")}>
          All
        </Button>
        <Button onClick={()=> setFilter("To Do")}>
          To Do
        </Button>
        <Button onClick={()=> setFilter("Done")}>
          Done
        </Button>
        </div>
        <div className='card'>
          {(filter === "Done" ? tasks.filter(task => task.isDone === true) :
          filter === "To Do" ?
          tasks.filter(task => task.isDone ===false) :
          tasks).map(task =>{
            return (
            <Task key ={task.id} task={task} />
            )}
          )}

        </div>
      </div>
      {/* {tasks.map(task => {
        return (
          <Task key={task.id} task={task} />
        )
      })} */}
    </div>
  )
}

export default ListTask