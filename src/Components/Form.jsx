import React from 'react';
import { useState } from 'react';
import Button from './Button';
import {v4 as uuidv4 } from 'uuid'

function Form({todos,setTodos,todotext,setTodotext}) {

    

    const handleSubmit = (e)=>{
        const newId = uuidv4()
       e.preventDefault()
       if(todotext){
       setTodos([...todos,{text:todotext ,completed: false ,id:newId }])
       setTodotext("")
       }
    }

    return ( 
        
        <form onSubmit={handleSubmit}>
           
            <div className='flex w-full border border-solid border-slate-300 px-3 py-2 rounded-lg'> 
           

            <input type="text" className='w-72 border rounded-lg' placeholder='Add todo'
            // { editText ? value={editText}:value={todotext}}
            value={todotext}
            onChange={(e)=> setTodotext(e.target.value)}
            />
            <Button type='submit' value='Add' className='w-10 ml-4 bg-orange-400'  />
            </div>
        </form>
     );
}

export default Form;