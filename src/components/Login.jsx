import React, { useState, useRef } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate'

const Login = () => {

  const [isSignInForm, setIsSignInForm]= useState()
  const[errorMessage, setErrorMessage]= useState(null)

  const toggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  const name = useRef(null);
  const email = useRef(null); // current value of email is null
  const password = useRef(null);

  const handleButtonClick = ()=>{
    // Validate the Form data first

      console.log(email.current.value) // Get the input field as an object via ref attribute declared inside the input then through that object get the value
      console.log(password.current.value)
    
    const message = checkValidData(email.current.value, password.current.value, name.current.value) // called the function that is inside the utility folder as component and pass the value of email and password taken useRef Hook for validation and get the result inside message variable
    console.log(message)
    setErrorMessage(message)
  }

  return (
    // This is the Login page here complete login page will be built
    <>
    <Header/>
    <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_small.jpg" alt="Netflix_background_image" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black text-white w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-opacity-80 rounded-lg' >
        <h1 className='text-3xl py-4 font-bold'>{isSignInForm?"Sign In":"Sign Up"}</h1>

         {/* !isSignInForm means signup form, if it is sign up form then only show the next command or print the textbox (if the first statement is true then only execute the second line) */}

        {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className='w-full my-4 p-4 font-semibold bg-gray-950 rounded-lg bg-opacity-50'/>)}

        <input ref={email} type="text" placeholder="Email or mobile number" className='w-full my-4 p-4 font-semibold bg-gray-950 rounded-lg bg-opacity-50'/>

        <input ref={password} type="password" placeholder="Password" className='w-full my-4 p-4 font-semibold rounded-lg bg-gray-950 bg-opacity-50'/>
        <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>

        <button className='w-full bg-red-700 p-4 my-6 rounded-lg' onClick={handleButtonClick} >{isSignInForm?"Sign In":"Sign Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already Register? Sign In Now"}</p>
      </form>
    </>
  )
}
export default Login