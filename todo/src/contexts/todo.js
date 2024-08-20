import { useContext,createContext } from "react";

export const todoContext=createContext({
    todos:[
       
    ],
    addTodo:(todo)=>{},
    upadateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
})

export const TodoProvider=todoContext.Provider;

//custom hook 
export const useTodo=()=>{
    return useContext(todoContext)
}