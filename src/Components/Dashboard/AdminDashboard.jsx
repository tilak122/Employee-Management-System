import React from 'react'
import Header from '../../Others/Header'
import AllTask from '../TaskList/AllTask'
import CreateTask from '../TaskList/CreateTask'


const AdminDashboard = (props) => {
  return (
    <div className='padding '>
      <Header changeuser={props.changeuser} />
      <h1 className='text-3xl font-semibold flex items-center justify-center '>Admin Dashboard</h1>
      <CreateTask />

   
    <AllTask />
    </div>
  )
}

export default AdminDashboard
