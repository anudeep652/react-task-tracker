// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Header from './Components/Header'
import './index.css'
import  Tasks from './Components/Tasks';
import  AddTask from './Components/AddTask';


const App = () => {

const [showAddTask,setshowAddTask] =useState(false);
  const [tasks,setTasks] = useState([
    // {
    //     id:1,
    //     text :'Doctors Appointment',
    //     day : 'Feb 5th at 2.30pm',
    //     reminder :true,
    // },
    // {
    //     id:2,
    //     text :'Meeting at School',
    //     day : 'Feb 6th at 1.30pm',
    //     reminder :true,
    // },   
    // {
    //     id:3,
    //     text :'food Shopping',
    //     day : 'Feb 5th at 2.30pm',
    //     reminder :false,
    // }
])

//add task

const addTask = (task) => {
  const id=Math.floor(Math.random()*10000)+1
  const newTask ={ id,...task }
  setTasks([...tasks,newTask])
}

//delete task

  const deleteTask = (id) => {
  setTasks(tasks.filter((task) =>task.id !==id))
}


//Toggle remainder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id ===id ? {...task ,reminder 
      :!task.reminder }:task
      )
    )
  }


  return (
    <div className="container">
      {/* <h1>Hello From React </h1> */}
      <h2><Header 
      title="Task Tracker"
      onAdd={() => setshowAddTask(!showAddTask)}
      showAdd={showAddTask}
      /></h2>

      { showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length>0 ?<Tasks tasks={tasks}
      onDelete= {deleteTask} 
      onToggle ={toggleReminder}
      /> :<h2>No Task To Show</h2>}
    </div>
  );
}

export default App;
