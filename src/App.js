import { useSelector } from 'react-redux';
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  const tasks = useSelector(state=>state.tasksReducers.tasks)
  return (
    <div className="App">
     <h1>Todo List </h1>
     <AddTask />
     <ListTask tasks={tasks}/>
    </div>
  );
}

export default App;
