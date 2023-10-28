"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [maintask, setmaintask] = useState("")

  const submithandler =(e) =>{
    e.preventDefault()
    setmaintask([...maintask,{title,description}]);
    settitle("")
    setdescription("")
  }

  const deletehandler =(i)=>{
let copytask =[...maintask]
copytask.splice(i,1)
setmaintask(copytask)
  }

  let rendertask =<h2>No task Available</h2>
  
  if (maintask.length>0) {
    rendertask=maintask.map((t,i)=>{
      return(
        <li key={i} className=' list-none flex items-center justify-between mb-5 px-8 '>
          <div className='flex justify-between items-center w-2/3  ' >
            <h5 className='text-2xl font-semibold'> {t.title} </h5>
            <h6 className='text-lg '> {t.description} </h6>
          </div>

          <button onClick={()=>{
            deletehandler(i)
          }} className=' bg-red-700 text-white px-4 py-2 rounded '>Delete</button>
        </li>
      )
    })
    
  }

  return (
    <>
      <h1 className='bg-black text-white text-4xl p-5 font-bold text-center '>My todo list</h1>
      <br />
      <hr />

      <form onSubmit={submithandler}>

        <input type="text" className='text-2xl border-zinc-700 border-4 m-8 py-2 px-8 rounded  '
          placeholder='Enter task here' 
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
          />

        <input type="text" className='text-2xl border-zinc-700 border-4 m-8 py-2 px-8 rounded  '
          placeholder='Enter description here' 
          value={description}
          onChange={(e)=>{
            setdescription(e.target.value)
          }}
          
          />

        <button className='bg-[green] text-white px-5 py-3 font-bold rounded m-8 '>Add task</button>
      </form>

      <hr/>
      <br />
      <div className='p-8 bg-slate-300'>
        {rendertask}
      </div>
    </>
  )
}

export default page