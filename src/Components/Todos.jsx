import React from 'react';
import { useState } from 'react';
import Button from './Button';


function Todos({todos,setTodos,setTodotext}) {


  const handleDelete = ({id}) =>{
     const updateTodos = (
     todos.filter((todo)=> todo.id !== id ))
     setTodos(updateTodos)
     
   }

  const handlecomplete = ({id}) =>{
    console.log("handle acces")
   const completeTodo = (
    todos.map(
      (item)=> ( item.id === id? {...item,completed:true } : item)
             ))
   setTodos(completeTodo)
  }

  const handleedit = (todo)=>{
    // console.log("edit fn")
    // const edittext = ( todos.filter((item)=>(item.id === todo.id? item :'')))
    // console.log(edittext[0].text)
    // setTodotext(edittext[0].text)

    setTodotext(todo.text)
    
    const editTodos = (
      todos.filter((item)=> item.id !== todo.id ))
      setTodos(editTodos)
   
    
  }
    return ( 

    <ul className=' ml-3 w-full flex  flex-col pt-3 '>
      {
    todos.map((todo)=>  
  
    <li key={todo.id} className={`w-11/12 h-9 mt-2 border rounded-lg border-slate-400 flex text-left text-orange-400 ${todo.completed === true ? 'line-through':''} `}>
      
      <div className='w-7/12'>
           {todo.text}
           </div>
          
        
      <div className=''>
    <Button className="  bg-green-400 text-gray-400 w-12 " value='Done'  onClick={ ()=>{
      console.log("before complete")
      handlecomplete(todo)
       console.log("after complete")} } />
    <Button className="  bg-yellow-100 text-gray-400 w-12" value='Edit' onClick={()=>{
      console.log("beforeedit")
      handleedit(todo)
      console.log("afteredit")
    }} />
    <Button className="  bg-red-700 text-gray-400 w-12 " value='Del' type="button" 
onClick={ () => {
  console.log("before")
  handleDelete(todo)
  console.log("after")
}
}
 /> 
    </div>
    </li>

    )}
    
    </ul>

     );
}

export default Todos;