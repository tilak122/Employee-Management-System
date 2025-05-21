import React, { useState } from 'react'

const Login = ({handlelogin}) => {
    const [email,SetEmail]=useState('')
    const [password,SetPassword]=useState('')
    const SubmitHandler=(e)=>{
        e.preventDefault()
        console.log("Form Submitted ")
        console.log("email is",email);
        console.log("password is",password);
        handlelogin(email,password)
        SetEmail("")
        SetPassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center '>
        <div className='border-7 rounded-xl border-emerald-600 !p-5'>

       
        <form onSubmit={(e)=>{
            SubmitHandler(e);
         

        }} className='flex flex-col items-center justify-center'>
            <input value={email} onChange={(e)=>{SetEmail(e.target.value)}} className=' text-xl outline-none border-4 border-emerald-600 py-4 px-4 rounded-full w-xl margin !p-3 ' type="email" placeholder='Enter your email' />
            <input value={password} onChange={(e)=>{SetPassword(e.target.value)}} className='text-xl border-4 border-emerald-600 py-4 px-4 rounded-full mt-5  w-xl margin !p-3' type="password" placeholder='Enter your password' />
            <button className='text-xl  border-red-600 bg-red-500 rounded-4xl border-4 margin !p-4' >Login</button>
        </form>
        </div>
        
      
    </div>
  )
}

export default Login
