import React, { useState } from "react";
import { Avatar, Box, Divider, Icon, IconButton, Switch} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico"
import {Stack} from "@mui/material";
import {Nav_Buttons} from "../../data"
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";


const DashboardLayout = () => {
const theme=useTheme();

const[selected,setSeleted]=useState(0);

console.log(theme)
  return (
        <>
    <Box sx={{backgroundColor:theme.palette.background.paper,
      boxShadow:"0px 0px 2px rgba(0,0,0,1)",
      height:"100vh",
      width:100,
        }}>
      <Stack 
      direction="column" 
      alignItems={"center"}
      justifyContent={ "space-between"}
       sx={{height:"100%"}}
        spacing={3}
         paddingTop={3}>
        <Stack alignItems={"center"}
        spacing={4}>
        <Box sx={{
        backgroundColor:theme.palette.primary.main,
        height:64,
        width:64,
        borderRadius:1.5,
      
       }}>
         <img src={Logo} alt={"logo"}/>        
       </Box>
         <Stack sx={{width:"max-content"}}
         direction="column"
         alignItems="center"
         spacing={3}>
         {Nav_Buttons.map((el)=> (
          el.index===selected ? 
          <Box 
          p={1}
          sx={{backgroundColor:theme.palette.primary.main,
            borderRadius:1.5,
           }}>
            <IconButton 
            sx={{width:"max-content",color:"#fff"}} 
            key={el.index}>
              {el.icon}
              </IconButton>
          </Box>
          :<IconButton 
            onClick={()=>{
              setSeleted(el.index)
            }}
          sx={{width:"max-content",color:"#000"}} 
          key={el.index}>
            {el.icon}
            </IconButton>
))}
   <Divider sx={{width:"48px"}}/>
   {selected === 3 ?(
    <Box 
   p={1}
   sx={{backgroundColor:theme.palette.primary.main,
     borderRadius:1.5,
    }}
    >
       <IconButton 
            sx={{width:"max-content",color:"#fff"}} >
           <Gear/>
        </IconButton>
      </Box>
   ) :(
    <IconButton
      onClick={()=>{
        setSeleted(3);
      }}
      >
    <Gear/>
 </IconButton>
   )}
    
   </Stack>
        </Stack>
  
   <Stack spacing={4} paddingBottom={1}>
  <Switch  defaultChecked/>
   <Avatar src={faker.image.avatar()}/>
   </Stack>
  
  </Stack>
</Box>
<Outlet />
    </>
  );
};

export default DashboardLayout;
