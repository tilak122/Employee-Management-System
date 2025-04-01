import React from 'react'
import Header from '../../Others/Header'
import TaskListNo from '../../Others/TaskListNo'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {

  return (
    <div className='padding  bg-[#1C1C1C] h-screen'>
    
        <Header changeuser={props.changeuser} data={props.data}/>
        <TaskListNo  data={props.data}/>
        <Tasklist  data={props.data}/>
      
    </div>
  )
}

export default EmployeeDashboard
