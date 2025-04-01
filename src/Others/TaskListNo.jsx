import React from 'react'

const TaskListNo = ({data}) => {
  
  return (
    <div className='margin  flex  justify-between gap-5 screen'>
        <div className=' padding w-[45%] rounded-xl bg-emerald-400 '>
        <h3 className='text-2xl '>{data.tasks.new_task}</h3>
        <h2 className='Text-3xl font-semibold'>New Task</h2>

        </div>
        <div className=' padding w-[45%] rounded-xl bg-blue-600'>
        <h3 className='text-2xl '>{data.tasks.completed}</h3>
        <h2 className='Text-3xl font-semibold'>Completed Task</h2>

        </div>
        <div className=' padding w-[45%] rounded-xl bg-green-900'>
        <h3 className='text-2xl '>{data.tasks.active}</h3>
        <h2 className='Text-3xl font-semibold'>Accepted Task</h2>

        </div>
        <div className=' padding w-[45%] rounded-xl bg-red-700'>
        <h3 className='text-2xl '>{data.tasks.failed}</h3>
        <h2 className='Text-3xl font-semibold'>Failed Task</h2>

        </div>




      
    </div>
  )
}

export default TaskListNo
