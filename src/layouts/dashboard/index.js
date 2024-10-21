import React from "react";

import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import {Stack} from "@mui/material";
import SideBar from "./SideBar";


const DashboardLayout = () => {
const theme=useTheme();

   return (
    <Stack direction="row">
    {/*sidebar*/}
    <SideBar/>
    <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
