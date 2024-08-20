import { useState } from 'react'
import './App.css'
import Todoform from './components/Todoform'
import Todoitem from './components/Todoitem'
import { TodoProvider } from './contexts/todo'

function App() {
  const [todos,setTodos]=useState([])


  const addTodo=(todo)=>{
    setTodos((prev)=>[todo,...prev])
    console.log(todos)

  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?todo:prevtodo ))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevtodo)=>prevtodo.id!=id))
  }

  const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id? {...prevtodo,completed:!prevtodo.completed}:  prevtodo ))
  } 

  React.useEffect(() => {
    
  
    
  }, [])
  





  return (
   <TodoProvider value={{addTodo,deleteTodo,updateTodo,toggleTodo,todos}}>
   <div className='w-full min-h-screen flex flex-col justify-top  bg-green-300 '>
      <div className='w-screen mt-[100px] flex justify-center  self-start '>
        {/* todo form */}
        <Todoform/>

      </div>
      <div className='flex flex-col gap-5 max-w-3xl min-w-[40rem] px-[50px] py-7 self-center'>
        {/* todo list */}
        {todos.map((todo)=>(
          <div key={todo.id}><Todoitem todo={todo}/></div>
        ))}
        
      </div>
   </div>
   </TodoProvider>
  )
}

export default App
