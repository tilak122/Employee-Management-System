import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[450px] bg-emerald-400 rounded-xl'>
    <div className=' padding flex items-center justify-between'>
        <h3 className=' text-3xl  font-extrabold rounded-xl'>{data.category}</h3>
        <h4 className='text-black text-2xl font-semibold '>{data.task_date}</h4>
    </div>
    <h2 className=' margin text-2xl font-semibold'>{data.task_title}</h2>
    <p className='margin text-xl text-black '>{data.task_description}</p>
    <div className='flex items-center justify-center margin '>
        <button className='bg-green-700 text-sm paddingbt'>Accept Task</button>
    </div>
    </div>


  )
}

export default NewTask
