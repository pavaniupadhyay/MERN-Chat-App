import React from 'react'
import { Box, IconButton, Typography ,Stack} from '@mui/material'
import { CircleDashed } from 'phosphor-react'

export const Chats = () => {
  return (
    <div>
      <Box sx={{
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',

        position:"relative",
        height:"100vh",
        width:320,
        backgroundColor:"F8FAFF",
        boxShadow:"0px 0px 2px rgba(0,0,0,0.25)",
        grid:"revert"
        
      }}>
        <Stack p={3}>
        <Stack direction="row"
         alignItems={"center"}
          justifyContent="space-between"  >
  <Typography variant="h5"> Chats</Typography>
  <IconButton>
    <CircleDashed/>
  </IconButton>
</Stack>
        </Stack>

      </Box>
    </div>
  )
}
