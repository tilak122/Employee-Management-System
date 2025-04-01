import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {
  const Authdata=useContext(Authcontext)
  return (
    <div className='bg-[#1C1C1C] margin padding rounded h-100 '>
        <div className='bg-red-400 flex justify-between padding rounded  '>
            <h2 className='w-1/5 font-extrabold'>Employee name</h2>
            <h3 className='w-1/5  font-extrabold'>New Task</h3>
            <h5 className='w-1/5 font-extrabold'>Active </h5>
            <h5 className='w-1/5  font-extrabold'>Completed</h5>
            <h5 className='w-1/5 font-extrabold'>failed</h5>
        </div>
        <div className='h-[80%] overflow-auto task'>
          {Authdata.employees.map(function(elem,idx){
            
            
            
            
             return  <div key={idx} className='border flex justify-between padding rounded margin'>
               <h2 className='w-1/5 font-bold'>{elem.name}</h2>
               <h3 className='w-1/5 text-blue-600 font-bold'>{elem.tasks[0].new_task}</h3>
               <h5 className='w-1/5 text-emerald-50-600 font-bold'>{elem.tasks[0].active} </h5>
               <h5 className='w-1/5 text-yellow-600 font-bold'>{elem.tasks[0].completed}</h5>
               <h5 className='w-1/5 text-red-600 font-bold'>{elem.tasks[0].failed}</h5>
               </div>
            



          })}

        </div>
     
      
    </div>
  )
}

export default AllTask
