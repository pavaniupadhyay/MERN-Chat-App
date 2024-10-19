
import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import { faker } from '@faker-js/faker'
import { Stack,Avatar,Badge } from '@mui/material'


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


const Conversation = () => {
  return (
<Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
  {/*Chat Header*/}
  <Box sx={{height:100,
  width:"100%" ,
  backgroundColor:"#e9f5f8"
  ,boxShadow:"0px 0px 2px rgba(0,0,0,0.25)",
  }}>
<Stack alignItems={"center"} justifyContent={"space-between"} direction={"row"} sx={{width:"100%",height:"100%"}}>
<Stack direction={"row"} spacing={2}>
  <Box>
    <StyledBadge>
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      <Avatar alt={faker.name.firstName()} src={faker.image.avatar()}/>
    </StyledBadge>
  </Box>

</Stack>
</Stack>
  </Box>
  {/*Msg*/}
  <Box width="100%" sx={{flexGrow:1}}>

  </Box>
  {/*Chat Footer*/}
  <Box sx={{height:100,width:"100%" ,backgroundColor:"#e9f5f8",boxShadow:"0px 0px 2px rgba(0,0,0,0.25)"}}>

  </Box>
</Stack>
  )}

export default Conversation