import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm]= useState()

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    // This is the Login page here complete login page will be built
    <>
    <Header/>
    <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_small.jpg" alt="Netflix_background_image" />
      </div>

      <form className='absolute bg-black text-white w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg' >
        <h1 className='text-3xl py-4 font-bold'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        
         {/* !isSignInForm means signup form, if it is sign up form then only show the next command or print the textbox (if the first statement is true then only execute the second line) */}

        {!isSignInForm && (<input type="text" placeholder="Full Name" className='w-full my-4 p-4 font-semibold bg-gray-950 rounded-lg bg-opacity-50'/>)}
        <input type="text" placeholder="Email or mobile number" className='w-full my-4 p-4 font-semibold bg-gray-950 rounded-lg bg-opacity-50'/>
        <input type="password" placeholder="Password" className='w-full my-4 p-4 font-semibold rounded-lg bg-gray-950 bg-opacity-50'/>
        <button className='w-full bg-red-700 p-4 my-6 rounded-lg' >{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Register? Sign In Now"}</p>
      </form>
    </>
  )
}
export default Login