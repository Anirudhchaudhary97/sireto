import React, { useState } from 'react'

import * as Yup from 'yup';
const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      password: Yup.string()
      .min(8, 'Too short! must be 8 chars minimum.')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter.')
      .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character.')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });




const LoginForm = () => {

    const [input,setInput]=useState({
       userName:"",
       password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert(input.userName)

    }

    const handleInputChange=(e)=>{

            setInput({
              ...input,
              [e.target.name]: e.target.value,
            });

    }

  return (
    <div className='flex flex-col justify-center items-center w-96'>
       <h1>Login Here </h1>
       <form action=""  onSubmit={handleSubmit}>
       <div className='flex flex-col gap-2'>
         <label htmlFor="username">UserName</label>
         <input type="text" placeholder='enter userName' name='userName'
          onChange={handleInputChange}
          value={input.userName}
          className='outline-none'/>
       </div>
       
       <div className='flex flex-col gap-2'>
       <label htmlFor="password">Password</label>
       <input type="password" placeholder='enter password' name='password'
       onChange={handleInputChange}
       value={input.password}
        className='outline-none'/>
       </div>
      <div>
        <input type="submit" value="submit" />
      </div>
      </form>
    </div>
  )
}

export default LoginForm
