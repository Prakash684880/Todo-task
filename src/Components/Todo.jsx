import React,{useState} from 'react'

const Todo = (props) => {
    const [input ,setInput]=useState('');

    
  return (
    <>
     <div className='flex  items-center '>
        <input 
            className='border-5 px-3 py-3 h-10 w-[300px] rounded-full '
            type="text" 
            placeholder='Enter the task to be performed Today? '
            onChange={e=>{
                setInput(e.target.value)
            }}
            value={input}
        />
        <button 
            className='border-black px-3 h-10 w-[90px] rounded-full bg-red-300'
            onClick={()=>{
                props.addList(input)
                setInput("")
            }}
        >
            Add Task
        </button>
        </div>
    </>
  )
}

export default Todo
