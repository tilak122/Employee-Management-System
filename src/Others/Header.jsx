import React from 'react'


const Header = (props) => {
  
const logoutUser=()=>{
  localStorage.setItem('LoggedInUser','')
//  window.location.reload()
props.changeuser('')

}
  return (
    <div className='flex  items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /><span className='text-3xl font-semibold '> User</span></h1>
        <button onClick={logoutUser} className='bg-red-800 text-lg text-white font-medium paddinglogin'>Log out</button>
      
    </div>
  )
}

export default Header
