
import React from 'react'
import { Box,  } from '@mui/material'
import { Stack } from '@mui/material'
import Hadder from './Hadder';
import Footer from './Footer';
import Message from './Message';




const Conversation = () => {
  return (
<Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
  {/*Chat Header*/}
  <Hadder/>
  {/*Msg*/}
  <Box width="100%" sx={{flexGrow:1 ,height:"100%",overflowY:"scroll"}}>
  <Message/>
  </Box>

  {/*Chat Footer*/}
  <Footer/>


 
</Stack>
  )}

export default Conversation