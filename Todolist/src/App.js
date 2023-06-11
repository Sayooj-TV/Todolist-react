
import './App.css';
import { useState } from 'react';

function App() {
 const[todolist,settodolist] =useState([]);
 const[newTask,setnewTask]=useState("");

 /*function for the change in the textbox*/

 const handleChange =(event)=>{
  setnewTask(event.target.value);
 };

 const addTask =()=>{
  const task={
     id:todolist.length===0?1:todolist[todolist.length-1]+1,
     taskname:newTask   

  }
  
  settodolist([...todolist,newTask]);
 };
 const deleteTask=(id)=>{
  settodolist(todolist.filter((task)=> task.id!==id))

 };


  
  
  return (
    <div className="App">


      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add</button>
      </div>


      <div className='list'>
        {todolist.map((task)=>{
          return (
            <div className="task">
              <h1>{task.taskname}</h1>
              <button onClick={()=>deleteTask(task.id)}>Delete</button>
            </div>
          );
        })}

      </div>


      
      
      
     </div>
  );
}

export default App;
