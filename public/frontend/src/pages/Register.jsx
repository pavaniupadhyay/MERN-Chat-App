import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"
import Logo from "../assets/logo.svg"
import {ToastContainer,toast} from "tostify";
const Register = () => {
  const [values,setvalues]=useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const handeleSubmit=(event)=>{
    event.preventDefault();
    handlevalidation();
  
  }
  const handlevalidation=()=>{
    const {password,confirmPassword,username,email}=values;
    if(password!==confirmPassword){
      toast.error("password and confirm password should be same.",{
        position:"bottom-right",
        autoClose:8000,
        pauseOnHover:true,
        theme:"dark",


      });
    }
  };

  const handlechange=(event)=>{
    setvalues({...values,[event.target.name]:event.target.value})



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
  />
   <input type='email' 
  placeholder='Email'
  name='email'
  onChange={(e)=>handeleSubmit(e)}
  />
   <input type='password' 
  placeholder='Password'
  name='password'
  onChange={(e)=>handeleSubmit(e)}
  />
   <input type='password' 
  placeholder='Confirm Password'
  name='Confirm Password'
  onChange={(e)=>handeleSubmit(e)}
  />
  <button type='submite'>Create User</button>
  <span>Alrady have an account ? <Link to="/login">Login</Link> </span>
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
const ToastContainer=styled.div`

`;

export default Register