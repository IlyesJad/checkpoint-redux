import { ADD_TASK, COMPLET_TASK, DELETE_ALL, DELETE_TASK, EDIT_TASK } from "../actiontypes/ActionTypes";

 export const addTask = (task) =>{
    return{
        type: ADD_TASK,
        payload: task,
    }
};
export const completeTask =(task) =>{
    return{
        type:COMPLET_TASK,
        payload:task,
    }
}
export const editTask =(task) =>{
    return{
        type:EDIT_TASK,
        payload:task
    }
}
export const deleteTask =(payload)=>{
    return{
        type:DELETE_TASK,
        payload
    }
}
export const deleteAll = (task) =>{
    return{
        type: DELETE_ALL,
    

    }
}