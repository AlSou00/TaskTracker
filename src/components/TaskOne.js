import React from 'react'
import { FaTimes} from 'react-icons/fa'

const TaskOne = (props) => {
    
    const styleC=()=>{
        if (props.task.reminder===true ){
            return {
                backgroundColor:'#F0F8FF',
                marginTop:'1%',
                paddingLeft:'5% ',
                borderLeft:'10px solid #008000 '

            }
        }
        else {
            return {
                backgroundColor:'#F0F8FF',
                marginTop:'1%',
                paddingLeft:'5%',
            }
        }
    };
    return (
        <div className="card " style ={styleC()} onDoubleClick={()=>props.onToggle(props.task.id)}>
            <h3>{props.task.text} 
            <FaTimes onClick={()=>props.onDelete(props.task.id)} style={{float:'right',color:'red',cursor:'pointer'}}/></h3>
            <p>{props.task.day}</p>
        </div>
    )
    
}

export default TaskOne
