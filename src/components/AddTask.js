import {useState} from 'react'
export const AddTask = (props) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!text){
            alert('Please enter a text')
            return 
        }
        props.onAdd({text,day ,reminder})
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className="form-horizontal" onSubmit={onSubmit}>
        <div   className="form-group">
            <label className="h4" >Task</label>
            <input type ='text' placeholder='Add Task !' className="form-control form-control" value={text} onChange={(e)=>setText(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label className="h4">Day + Time</label>
            <input type ='text' placeholder='Add Day + Time !'className="form-control form-control" value={day} onChange={(e)=>setDay(e.target.value)}></input>
        </div>
        <div className="form-group">
            <label className="h4" >Set Reminder</label>
            <input checked={reminder}type ='checkbox' style={{marginLeft:'10%'}} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type='submit' value='Save Task ' className="btn btn-success btn-lg" style={{marginLeft:'44%'}} ></input>
    </form>
    )
}
export default AddTask;