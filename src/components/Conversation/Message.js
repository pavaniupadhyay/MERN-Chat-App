import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { Mediamsg, ReplyMsg, Textmsg, TimeLine } from './MessageType'

const Message = () => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el)=>{
          switch(el.type){
            case "divider":
              //timeline
              return<TimeLine el={el}/>
              case "msg":
              switch(el.subtype){
                case"img":
                //img msg
                return<Mediamsg el={el}/>
                case"doc":
                //doc msg
                break;
                case"reply":
                //reply msg
               return <ReplyMsg el={el}/>
                break;
                case"link":
                //linl msg
                break;
                case"img":
                //img msg
                break;
                default:
                  //text msg
                  return <Textmsg el={el}/>
                  
              }
              break;
              default:
                return<></>
                break;
          }
        })}
      </Stack>
     
    </Box>
  )
}

export default Message