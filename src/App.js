import Header from './components/Header'
import Task from './components/Task'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import {useState} from 'react'

const  App =() => {
  const [show,setShow]=useState(false)
  const [tasks,setTasks]=useState([
    {
      id:1,
      text:'Doctor appointment',
      'day' :'Feb 5th at 2:30 pm',
      reminder:true,
  },
  {
      id:2,
      text:'Meeting at School',
      day :'Feb 6th at 1:30 pm',
      reminder:false,
  },
  {
      id:3,
      text:'Shopping',
      day:'Feb 5th at 2:30 pm',
      reminder:true,
  }
  ])
//delete 
const deleteTask=(id)=>{
      setTasks(tasks.filter((task)=>task.id!==id))
};
// reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder} : task))
};
//add task
const add=(task)=>{
const id=Math.floor(Math.random()*1000 )+1
const newTask={id ,...task}
setTasks([...tasks, newTask])
}
// toggle
const onClick=()=>{
  setShow(!show)
  console.log(show);
}

  return (
    
      <div className="card container" style={{marginTop:'1%'}}>
        <Header onClick={onClick} show={show}/>
              {show ?  <AddTask onAdd={add}/> :''}
              {tasks.length>0 ?
              <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :<p className="alert-warning" style={{marginLeft:'10%',marginRight:'10%', marginTop:'5%'}}><strong style={{paddingLeft:'5%'}}>No Tasks To Show  !</strong> </p>}
        <Footer/>
      </div>
    
  );
}

export default App;
