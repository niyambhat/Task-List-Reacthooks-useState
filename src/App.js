import './App.css';
import React, { useState } from 'react';
import NewTask from './Components/NewTask';
import TaskList from './Components/TaskList';

function App(){
const [task, setTask] = useState({});
const [taskList, setTaskList] = useState([]);

const handleChange = ({target})=>{
  const {name, value} = target;
  setTask((prev)=>({...prev, 
    id:Date.now(),
  [name]:value
  }))
}

const handleSubmit =(e)=>{
  e.preventDefault();
  setTaskList((prev)=>([...prev, task]))
}


return(
  <div>
    <NewTask handleSubmit={handleSubmit} handleChange={handleChange}/>
    <TaskList tasks={taskList}/>
  </div>
)

}

export default App;
