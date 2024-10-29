import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



export default function App() {

      const [tasks, setTasks] = useState([]);

      const addTask = (task)=>{
        setTasks([...tasks,task]);
      };
    
  return (
     <div className="Task-container">
      <h1>Task Tracker</h1>    
     <ul>
      {tasks.map((task)=> (
        <li key={task.id}>{task.text}</li>
      ))}
     </ul>
     </div>
  )
}
