import React, { useState } from 'react'
import {user} from '../../public/data'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email : "",
    password : ""
  })

  const ChangeHandler = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name] : value}))
  }

  const SubmitHandler = (e) => {
    e.preventDefault();

    if(formData.email == user.email && formData.password == user.password){
      localStorage.setItem("isLogin", true);
      navigate("/admin");
    }

    setFormData({
      email : "",
      password : ""
    })
  }

  return (
    <div>

      <form onSubmit={SubmitHandler}>
        Enter Email <br />
        <input type="text" placeholder='Enter your Email'
          name='email'
          value={formData.email}
          onChange={ChangeHandler}
        />
        <br /> <br />
        Enter Password <br />
        <input type="password" placeholder='Enter your Password'
          name='password'
          value={formData.password}
          onChange={ChangeHandler}
        />
        <br /><br />
        <button>Login Now</button>
      </form>

    </div>
  )
}

export default Login
