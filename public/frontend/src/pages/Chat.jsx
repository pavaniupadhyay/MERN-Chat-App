import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { allUsersRoute } from '../APIRoutes';
import Contacts from '../components/Contacts';
function Chat() {
  const navigate=useNavigate();
  const [contects,setcontects]=useState([]);
  const [currentUser,setCurrentUser]=useState(undefined);
  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
    }
  }, []);
  useEffect(async()=>{
if(currentUser){
   if(currentUser.isAvatarImageSet){
    const data=await axios.get(`${allUsersRoute}/${currentUser._id}`);
    setcontects(data.data);
    }else{
      navigate("/setAvatar");
    }
}
  },[currentUser]);
  return(
<Container>
    <div className="chat-container"></div>
  <Contacts contects={contects} currentUser={currentUser}/>
       </Container>
  ); 
}
const Container=styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
.container{
  width: 85vw;
  height: 85vh;
  background-color: #00000076;
  display: grid;
  grid-template-columns: 25% 75%;
  @media screen and(min-width: 720px) and (max-width:1080px){
    grid-template-columns: 30% 65%;
    
  }
}
`;
export default Chat;

