
import React, { useState } from 'react'
import { Box, Fab ,IconButton, InputAdornment, TextField, Tooltip } from '@mui/material'
import { styled , useTheme} from '@mui/material/styles';
import { Stack } from '@mui/material'
import {  Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User, } from 'phosphor-react';
import data from '@emoji-mart/data'
import Picker from "@emoji-mart/react"



const ChatInput =({setOpenPicker})=>{
  const[openActions,setOpenActions]=useState();
  return(
    <StyledInput fullWidth placeholder="Write a message..." variant="filled" InputProps={{
      disableUnderline:true,
      startAdornment:(
      <Stack sx={{width:"max-content"}}>
       <Stack sx={{position:"relative",display:openActions?"inline-block":"none"}}>
        {Actions.map((el)=>{
         <Tooltip placement='right' title={el.title}>
          <Fab
           sx={{
            position:"absolute",
            top:-el.y,
            backgroundColor:el.color}}>
          {el.icon}
          </Fab>

  </Tooltip>
  })}
  </Stack>
<InputAdornment>
<IconButton>
        <LinkSimple onClick={()=>{
          setOpenActions((prev)=>!prev);
        }}/>
      </IconButton>
      </InputAdornment>
</Stack>
      ),
      endAdornment:
      <InputAdornment>
      <IconButton  onClick={()=>{
          setOpenPicker((prev) =>!prev);
          }}>
        <Smiley/>
      </IconButton>
      </InputAdornment>,
  }}
  />
  )
}
const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    paddingTop:"12px",
    paddingBottom:"12px",
  }
}))

const Actions=[
  {
   color:"4da5fe",
   icon:<Image size={24}/>,
   y:102,
   title:"Photo/Video",
  },
  {
   color:"#1b8cfe",
   icon:<Sticker size={24}/>,
   y:172,
   title:"Stickers",
  },
  {
   color:"4da5fe",
   icon:<Camera size={24}/>,
   y:242,
   title:"Image",
  },
  {
   color:"#0159b2",
   icon:<File size={24}/>,
   y:312,
   title:"Document",
  },
  {
   color:"#0159b2",
   icon:<User size={24}/>,
   y:382,
   title:"Contact",
  }
];

const Footer = () => {
  const[openPicker,setOpenPicker]=React.useState();
  const theme=useTheme();
  return (
    <Stack>
      <Box 
      p={2}
     sx={{
  
    width:"100%" ,
    backgroundColor:theme.palette.mode==="light"? "#e9f5f8": theme.palette.background.paper, 
    boxShadow:"0px 0px 2px rgba(0,0,0,0.25)"}}>
<Stack direction={"row"} alignItems={"center"} spacing={3}>
  <Stack sx={{width:"100%"}}>
    <Box sx={{display:openPicker?"inline":"none" , zIndex:10,position:"fixed",bottom:81,right:100 }}>
    <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log}/>
    </Box>
  <ChatInput setOpenPicker={setOpenPicker}/>
  </Stack>

 
<Box sx={{height:48,width:48,backgroundColor:theme.palette.primary.main,borderRadius:1.5}}>
  <Stack sx={{height:"100%" ,width:"100%",alignItems:"center",justifyContent:"center"}}>
  <IconButton>
  <PaperPlaneTilt color="#fff"/>
  </IconButton>

  </Stack>
 
</Box>
</Stack>
  </Box>
    </Stack>
  )
}

export default Footer