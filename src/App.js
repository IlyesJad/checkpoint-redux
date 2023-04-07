import { useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import { useDispatch } from 'react-redux';
import { deleteAll } from './redux/actions/TaskActions'
import Button from 'react-bootstrap/Button';


function App() {
  const tasks = useSelector(state=>state.tasksReducers.tasks)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <h1 className='title'>MY TO DO LIST </h1>
     <AddTask />
     <ListTask  tasks={tasks}/>
     <Button style={{margin:"10px"}} className='btn btn-danger' onClick={()=>dispatch(deleteAll())}>DELETE ALL</Button>
    </div>
  );
}

export default App;
