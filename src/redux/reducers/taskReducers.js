import { ADD_TASK, COMPLET_TASK, EDIT_TASK } from "../actiontypes/ActionTypes"

const initialState={
    tasks:[
        {id:Math.floor(Math.random()*1000),discription: "workshop",isDone:false},
        {id:Math.floor(Math.random()*1000),discription: "Dinner",isDone:true},
    ]
}
const tasksReducers = (state =initialState,{type,payload}) =>{
switch(type){
    case ADD_TASK:
        const newTask={
            id:Math.random(),
            discription:payload,
            isDone:false,
        };
        return{
            ...state,
            tasks:[...state.tasks,newTask],
        };
        case COMPLET_TASK:
            const toggleTasks = state.tasks.map((task) =>
            task.id === payload.id ? {...payload, isDone:!payload.isDone} : task
            );
            return {
                ...state,
                tasks:toggleTasks,
            };
            case EDIT_TASK:
                const editTask = state.tasks.map(task =>{
                    if(task.id===payload.id) {
                        task.id = payload.id;
                        task.discription = payload.discription;
                        task.isDone = payload.isDone
                    }
                    return task
                })
                return {
                    ...state,tasks :editTask
                }
        default:
            return state;
         
}
}
export default tasksReducers;
