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
        <div className='border-2 rounded-xl border-emerald-600 p-20'>

       
        <form onSubmit={(e)=>{
            SubmitHandler(e);
         

        }} className='flex flex-col items-center justify-center'>
            <input value={email} onChange={(e)=>{SetEmail(e.target.value)}} className=' text-xl outline-none border-2 border-emerald-600 py-4 px-4 rounded-full w-xl margin paddinglogin ' type="email" placeholder='Enter your email' />
            <input value={password} onChange={(e)=>{SetPassword(e.target.value)}} className='text-xl border-2 border-emerald-600 py-4 px-4 rounded-full mt-5  w-xl margin paddinglogin' type="password" placeholder='Enter your password' />
            <button className='text-xl  border-emerald-600 bg-red-500 rounded-full margin paddinglogin' >Login</button>
        </form>
        </div>
        
      
    </div>
  )
}

export default Login
