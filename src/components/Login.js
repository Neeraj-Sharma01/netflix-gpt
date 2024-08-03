import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

 const [inSignInForm,SetInSignInform] = useState(true);

  const toggleSignInForm = () => {
      SetInSignInform(!inSignInForm);
  }
  return (
    <div>
        <Header/>
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg"
            alt="Logo" />
        </div>
        <form className='w-3/12 absolute p-5 bg-black my-40 mx-auto right-0 left-0 text-center text-white bg-opacity-70 rounded-lg'>
         <h1 className='font-bold text-2xl my-5'>{inSignInForm ? "Sign In" : "Sign Up"}</h1>
         {
          !inSignInForm && 
          <input type="text" placeholder="Enter Name" className='p-2 my-4 w-full bg-gray-600 rounded-lg'/>

         }
          <input type="text" placeholder="Enter Email" className='p-2 my-4 w-full bg-gray-600 rounded-lg'/>
          <input type="password" placeholder="Enter Password" className='p-2 my-4 w-full bg-gray-600 rounded-lg'/>
          <button className='p-2 my-6 bg-red-600 w-full rounded-lg'>
          {inSignInForm ? "Sign In" : "Sign Up" }
          </button>
          <p className='my-6 cursor-pointer' onClick={toggleSignInForm}>
          {inSignInForm ? "New to Netflix?Sign Up Now." : "Alerady Registered?Sign in Now."}
          
          </p>
        </form>
    </div>
  )
}

export default Login