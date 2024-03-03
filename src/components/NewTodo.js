import React,{useState} from 'react'
import style from './NewTodo.module.css'
const NewTodo = (props) => {

    const [todo,setTodo] = useState({title:"",desc:""})
    const {title,desc}=todo

    const handleInputChange=(e)=>{
            const name = e.target.name
            setTodo((oldTodo)=>{
                return (
                    {...oldTodo,[name]:e.target.value}
                )
            })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"",desc:""})
    }
  return (
   <form onSubmit={handleSubmit} className={style.form}>
    <div className={style["form-field"]}>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' id='title' value={title} onChange={handleInputChange}/>
    </div>
    <div className={style["form-field"]}>
        <label htmlFor='desc'>Description</label>
        <textarea type='text' id='desc' name='desc' value={desc} onChange={handleInputChange}/>
    </div>
    <button type='submit'>Add todo</button>
   </form>
  )
}

export default NewTodo
