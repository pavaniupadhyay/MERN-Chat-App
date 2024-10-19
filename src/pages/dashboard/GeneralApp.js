import React from 'react'
import {Chats}   from './Chats'
import { Stack,Box } from '@mui/material'
import Conversation from '../../components/Conversation/Conversation';

const GeneralApp = () => {
  return (
    <Stack direction={"row"} sx={{width:"100%"}}>
     <Chats/>
     <Box sx={{height:"100%" ,width:"100%",backgroundColor:"#fff"}}>
<Conversation/>
     </Box>
    </Stack>
  );
}

export default GeneralApp