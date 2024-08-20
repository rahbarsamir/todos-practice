import React, { useState } from 'react'
import { useTodo } from '../contexts/todo'

const Todoform = () => {
  const [todo,setTodo]=useState('')
  const {addTodo,todos}=useTodo()
  const add=(e)=>{
    e.preventDefault()
    if(!todo) return
    addTodo({id:Date.now(),msg:todo,completed:false})
   
    setTodo('')
  }
  return (
    <>
   <div className='w-[50rem] p-10'>
   <form 
   onSubmit={add}
   className='flex gap-4 justify-evenly flex-row '
   action="">
    <input
    value={todo}
    onChange={(e)=>setTodo(e.target.value)}
     type="text"
      placeholder='enter todo'
      className='w-full rounded-xl p-3 outline-none bg-white/50 border-black/5'
      />
    <button
    className='bg-amber-400 px-7 rounded-xl py-5'
    >Add</button>
    </form>
   </div>
    </>
  )
}

export default Todoform