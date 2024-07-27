import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import loader from "../assets/loader.gif"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from"axios";
import { setAvatarRoute } from '../APIRoutes';

const SetAvatar = () => {
  const api='https://api.multiavtar.com/4567854'
  const navigate=useNavigate();
return(
  <>
   <container>SetAvatar</container>
  <ToastContainer/>

  </>
)
}

export default SetAvatar
const container=styled.div``;