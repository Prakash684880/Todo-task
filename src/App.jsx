import React, { useState } from 'react'
import Todo from './Components/Todo'
import "./App.css";
import ListTodo from './Components/ListTodo';
const App = () => {
  const [todoList,setTodolist]=useState([]);
  let addList =(input)=>{
    if (input !== ''){
    setTodolist([...todoList,input]);
    }
  }
const deleteItem=(key)=>{
  let newtodolist=[...todoList];
  newtodolist.splice(key,1);
  setTodolist([...newtodolist]);
} 

  return (
      <div className='flex justify-center items-center font-semibold h-[100vh] '>
        <div className='h-[500px] w-[400px]'>
          <Todo addList={addList}/>
          <h1 className='pt-3 pb-2 text-3xl' >TODO List </h1>
        <hr className='pb-5' />
        {todoList.map((listitem ,i)=>{
          return(
            <ListTodo key={i} index={i} item={listitem}
            deleteItem={deleteItem}/>
          )
        })}
        </div> 
        
      </div>
      
    
  )
}

export default App
