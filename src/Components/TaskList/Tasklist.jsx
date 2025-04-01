import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
    
  return (
    <div className=' margin overflow-x-auto flex items-center justify-start gap-5  h-[60%] w-[100%]  flex-nowrap  '>
   {data.tasks.map((elem,idx)=>{
    if(elem.active){
        return <AcceptTask key={idx} data={elem}/>
    }
    if(elem.new_task){
        return <NewTask  key={idx} data={elem} />
    }
    if(elem.completed){
        return <CompleteTask key={idx} data={elem} />
    }
    if(elem.failed){
        return <FailedTask key={idx} data={elem} />
    }
    

   })}
        
     
    </div>
  )
}

export default Tasklist
