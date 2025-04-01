import React, { useState } from 'react'


const CreateTask = () => {
    
const[tasktitle,settasktitle]=useState('')
const[taskcategory,settaskcategory]=useState('')
const[taskdescription,settaskdescription]=useState('')
const[taskdate,settaskdate]=useState('')
const[taskassign,settaskassign]=useState('')
const[newtask,setnewtask]=useState({})
const submithandler=(e)=>{
    e.preventDefault()
    setnewtask({tasktitle,taskdescription,taskdate,taskcategory,active:false,newtask:true,failed:false,completed:false})
    const data=JSON.parse(localStorage.getItem('employees'))
    data.forEach(function(elem){
      if(taskassign==elem.name){
        elem.tasks.push(newtask)
        console.log(elem)
      }
      settaskassign('')
      settaskcategory('')
      settaskdescription('')
      settaskdate('')
      settasktitle('')
    })
 

    

}
  return (
    <div className=' bg-[#1C1C1C] padding h-screen w-[100%] flex justify-center items-center '>
        
        
    <div className='padding w-[25%] '>
        <form onSubmit={(e)=>{submithandler(e);}} className='flex flex-col items-center justify-center border-6 '>
            <h3 className='marginpadding  bg-red-600 font-bold '>Task Title</h3>
            <input value={tasktitle} onChange={(e)=>{settasktitle(e.target.value)}} className='border-2 paddinglogin  ' type="text" placeholder='Make a UI design' />
            <h3 className='marginpadding  bg-purple-600 font-bold'>Description</h3>
            <textarea value={taskdescription} onChange={(e)=>{settaskdescription(e.target.value)}}  className=' border-3 paddinglogin  ' name="" id="" cols="30" rows="5"></textarea>
            <h3 className='marginpadding  bg-green-700 font-bold'>Date</h3>
            <input value={taskdate} onChange={(e)=>{settaskdate(e.target.value)}}  className='border-2 paddinglogin ' type="date"  />
            <h3 className='marginpadding  bg-amber-700 font-bold'>Assign to</h3>
            <input value={taskassign} onChange={(e)=>{settaskassign(e.target.value)}}  className='border-2 paddinglogin ' type="text" placeholder='Employee name' />
            <h3 className='marginpadding  bg-blue-950 font-bold'>Category</h3>
            <input value={taskcategory} onChange={(e)=>{settaskcategory(e.target.value)}}  className='border-2 paddinglogin ' type="text" placeholder='design..' />
            <button className='marginpadding bg-black font-extrabold'>Create Task</button>

        </form>
    </div>
  
    
  
</div>
  )
}

export default CreateTask
