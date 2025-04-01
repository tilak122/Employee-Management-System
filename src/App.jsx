import React, {  useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { Authcontext } from './context/AuthProvider'
import { setLocalStorage } from './Utils/LocalStorage'


const App = () => {
  const[user,setUser]=useState(null)
  const[loggedinuserdata,setloggedinuserdata]=useState(null)
  const authdata=useContext(Authcontext)



  useEffect(()=>{
    setLocalStorage()
  },[])

  useEffect(()=>{
      const LoggedInUser=localStorage.getItem("LoggedInUser")
      if(LoggedInUser){
        const Userdata=JSON.parse(LoggedInUser)
        setUser(Userdata.role)
        setloggedinuserdata(Userdata.data)
      }
    

  },[])


  
  const handlelogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))

    }
    else if(authdata){
      const employee=authdata.employees.find((e)=>email==e.email&&e.password==password )
      if(employee){
      setUser('employee')
      setloggedinuserdata(employee)
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee',data:employee}))
      }

    }
    else
      alert("Invalid mail or passwords")
    

  };

  
  
  
  return (
    <>
      {!user?<Login handlelogin={handlelogin} />:''}
      {user=='admin'?<AdminDashboard changeuser={setUser} />:''}
      {user=='employee'?<EmployeeDashboard changeuser={setUser} data={loggedinuserdata}/>:''}
      
   

  

    </>
  )
}

export default App
