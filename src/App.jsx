
import { useState } from 'react'
import React from 'react'
import Form from './Components/Form'
import Todos from './Components/Todos'


function App() {
  const [todos,setTodos] = useState([])
  const [todotext,setTodotext] = useState("")

  // const handleDelete = ({id}) =>{
  //   console.log("correct",id)
  //    const updateTodos = (
  //     todos.filter((todo)=> todo.id !== id )
  //   )
  //  setTodos(updateTodos)
  //  }


  return (
   <div className='bg-orange-400 w-screen h-screen  items-center flex'>
   <div className='bg-black mx-auto  w-96 h-5/6  rounded-xl border border-black shadow-lg shadow-black flex flex-col items-center'>
  
   <h1 className='text-orange-400 font-serif mb-4 mt-4 text-4xl'>My Todos</h1>
<Form  todos={todos} setTodos={setTodos} todotext={todotext} setTodotext={setTodotext} />
<Todos todos={todos} setTodos={setTodos} setTodotext={setTodotext} />
   </div>
   </div>
  )
}

export default App
