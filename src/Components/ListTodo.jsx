import React from 'react'

const ListTodo = (props) => {
  return (

    <div className='flex border-2 items-center justify-between pt-4  w-[400px] h-[50px] rounded-full'>
     <div className='pl-3 pb-4' >
     {props.item}
     </div> 
     <div className='pr-3 pb-4'>
      <button 
      className=' pb-2 border rounded-full bg-red-300'
      onClick={e=>{
        props.deleteItem(props.index)
      }}
      >
        Delete
      </button>
      </div>
    </div>
  )
}

export default ListTodo
