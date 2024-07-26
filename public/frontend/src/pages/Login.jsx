import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from"axios";
import { loginRoute} from '../APIRoutes';
const Login = () => {
  const navigate=useNavigate();
  const [values,setvalues]=useState({
    username:"",
    password:"",

  })
  const toastOptions={
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
  const handeleSubmit= async(event)=>{
    event.preventDefault();
    if(handleValidation()){
      console.log
      const { password, username } = values;
      const {data}=await axios.post(loginRoute,
        {username,password});
if(data.status===false){
    toast.error(data.msg,toastOptions);
}
if(data.status=== true){
localStorage.setItem('chat-app-user',JSON.stringify(data.user))
}
navigate("/");
    }
  };
  const handleChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { password, username } = values;
    if (password==="") {
      toast.error( "email and password is reqvierd",toastOptions);
      return false;
    }else if (username.length ==="") {toast.error("email and password is reqvierd",toastOptions);
      return false;
    }
    return true;
  };
  return<>
  <Formcontainer>
 <form onSubmit={(event)=> handeleSubmit(event)}>
  <div className='brand'>
    <img src={Logo} alt="Logo" />
    <h1>snappy</h1>
  </div>
  <input type='text' 
  placeholder='Username'
  name='username'
  onChange={(e)=>handeleSubmit(e)}
  min="3"
  />
   
   <input type='password' 
  placeholder='Password'
  name='password'
  onChange={(e)=>handeleSubmit(e)}
  />
  
  <button type='submite'>Login In</button>
  <span>Don't have an account ? <Link to="/Register">Register</Link> </span>
  </form>
 </Formcontainer>
 <ToastContainer/>
</>
  
}
const Formcontainer=styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 flex-direction: column;
 gap:1rem ;
 align-items: center;
 background-color:#131324;
 
.brand{
  display: flex;
 align-items: center;
  gap:1rem;
  justify-content: center;
  margin-top: 20px;
  img{
    height: 5rem;

  }
  h1{
    color:white;
    text-transform: uppercase;

  }
 }
 form{
  display: flex;
  flex-direction: column;
  gap:2rem;
  background-color: #00000076;
  border-radius: 2rem  ;
  padding: 3rem 5rem;
  margin-top: 80px;
  margin-right:80px;
  input{
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus{
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button{
    background-color: #997af0;
    color: white;
    border:none;
    padding: 1rem 2rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    text-transform: uppercase;
    font-size: 1rem;
    transition:0.5s ease-in-out ;
    &:hover{
      background-color: #4e0eff;

    }
  }
span{
  color: white;
  text-transform: uppercase;
  a{
    color: #4e0eff;
    text-decoration: none;
    font-weight: bold;
  }
}
 }
`;


export default Login