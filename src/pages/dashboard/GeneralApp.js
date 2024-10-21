import React from 'react'
import {Chats}   from './Chats'
import { Stack,Box} from '@mui/material'
import Conversation from '../../components/Conversation/Conversation';
import { useTheme } from '@mui/material/styles';
const GeneralApp = () => {
  const theme=useTheme(); 
  return (
    <Stack direction={"row"} sx={{width:"100%"}}>
     <Chats/>
     <Box sx={{
      height:"100%" ,
      width:"100%",
      backgroundColor:theme.palette.mode ==="light" 
      ?"#ebf2f5"
      :theme.palette.background.default}}>
     <Conversation/>
     </Box>
    </Stack>
  );
}

export default GeneralApp