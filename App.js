import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks.js";
import AddTask from "./components/AddTask";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const[tasks,setTasks]= useState(false)
//add task
const addTask = (task) =>{
  const id = Math.floor(Math.random()*10000)+1
const newTask = {id,...task}
setTasks([...tasks,newTask])
}
//delete tasks
const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=> task.id !== id))
}
//toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=> task.id === id ? {...task,reminder:
    !task.reminder}: task))
    }
  return (
    <div className="container">
      <Header onAdd={()=> 
        setShowAddTask
        (!showAddTask)} showAdd={showAddTask} />
         
      {showAddTask &&<AddTask  onAdd={addTask}/>}
      {tasks.length >0 ?(<Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder} />):
      ("No Tasks to show")}
    </div>
  )
}
export default App;
