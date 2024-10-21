import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from '@mui/material'
import { DownloadSimple, Image } from 'phosphor-react'
import React from 'react'



const Docmsg = ({el}) => {
  const theme = useTheme()
  return (
    <Stack 
    direction={"row"}
     justifyContent={el.incoming ?"start":"end" 
     }
     >
      <Box
    p={1.5}
     sx={{backgroundColor:el.incoming
     ?theme.palette.background.default
     : theme.palette.primary.main ,
     borderRadius:1.5,
     Width:"max-content"
     }}
     >
      <Stack spacing={2}>
   <Stack p={2} 
direction={"row"}
 spacing={2} 
 alignItems={"center"}
 sx={{backgroundColor:theme.palette.background.paper,
 borderRadius:1}}>
<Image size={48}/>
<Typography variant="caption">

  Absterct.png
</Typography>
<IconButton>
  <DownloadSimple/>
</IconButton>
</Stack>
<Typography variant="body2"
           sx={{color:el.incoming?theme.palette.text:"#fff"}}>
  {el.message}
</Typography>
      </Stack>
      </Box>
      </Stack>
  )
}


const Linkmsg = ({el}) => {
  const theme = useTheme()
  return (
    <Stack 
    direction={"row"}
     justifyContent={el.incoming ?"start":"end" 
     }
     >
      <Box
    p={1.5}
     sx={{backgroundColor:el.incoming
     ?theme.palette.background.default
     : theme.palette.primary.main ,
     borderRadius:1.5,
     Width:"max-content"
     }}
     >
      <Stack spacing={2}>
        <Stack p={2} 
        spacing={3}
         alignItems={"start"}
         sx={{backgroundColor:theme.palette.background.paper,
         borderRadius:1}}
          >
          <img src={el.preview} alt={el.message} style={{maxHeight:210,borderRadius:"10px"}}/>
          <Stack spacing={2}>
           <Typography variant="subtitle2">
Creating Chat App
           </Typography>
           <Typography 
           variant="subtitle2"
           sx={{color:theme.palette.primary.main}}
           component={Link}
           to="//https://www.youtube.com"
            >
www.youtube.com
           </Typography>
          </Stack>
          <Typography variant='body2' color={el.incoming?theme.palette.text:"#fff"}>
            {el.message}
          </Typography>
        </Stack>
      </Stack>
      </Box>
      </Stack>
  )
}
 const ReplyMsg = ({el}) => {
  const theme = useTheme()
  return (
    <Stack 
    direction={"row"}
     justifyContent={el.incoming ?"start":"end" }
     >
      <Box
    p={1.5}
     sx={{backgroundColor:el.incoming
     ?theme.palette.background.default
     : theme.palette.primary.main ,
     borderRadius:1.5,
     Width:"max-content"
     }}
     >
      <Stack spacing={2}>
        <Stack p={2} direction={"column"} spacing={3} alignItems={"center"} sx={{backgroundColor:theme.palette.background.paper,borderRadius:1}}>
          <Typography variant="body2" color={theme.palette.text}>
          {el.message}
          </Typography>

        </Stack>
<Typography variant="body2" color={el.incoming?theme.palette.text:"#fff"}>
{el.message}
</Typography>
      </Stack>
      </Box>
      </Stack>
  )
}
const Mediamsg = ({el}) => {
  const theme = useTheme()
  return (
    <Stack 
    direction={"row"}
     justifyContent={el.incoming ?"start":"end" }
     >
      <Box
    p={1.5}
     sx={{backgroundColor:el.incoming
     ?theme.palette.background.default
     : theme.palette.primary.main ,
     borderRadius:1.5,
     Width:"max-content"
     }}
     >
      <Stack spacing={1}>
        <img src={el.img} 
        alt={el.message}
        style={{maxHeight:210,
        borderRadius:"10px"}}/>
<Typography variant="body2"  color={el.incoming?theme.palette.text:"#fff"}>
  {el.message}
</Typography>
      </Stack>
      </Box>

      </Stack>
  )
}
const Textmsg = ({el}) => {
  const theme = useTheme()
  return (
    <Stack direction={"row"} justifyContent={el.incoming ?"start":"end" }>
    <Box
    p={1.5}
     sx={{backgroundColor:el.incoming
     ?theme.palette.background.default
     : theme.palette.primary.main ,
     borderRadius:1.5,
     Width:"max-content"
     }}
     >
    <Typography variant="body2" color={el.incoming?theme.palette.text:"#fff"}>
      {el.message}
    </Typography>
    </Box>
    </Stack>
  )
}
const TimeLine = ({el}) => {
  const theme=useTheme();
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Divider Width="45%"/>
      <Typography variant="caption" sx={{color:theme.palette.text}}>
        {el.text}
      </Typography>
      <Divider Width="45%"/>
    </Stack>
  )
}

export {TimeLine,Textmsg,Mediamsg,ReplyMsg ,Linkmsg,Docmsg} 