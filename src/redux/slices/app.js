import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../Store";

  

const initalState={
  SideBar:{
    open:false,
    type:"CONTECT",//it can be CONTECT,STARRED,SHARED

  }
}

const slice=createSlice({
  name:"app",
  initialState:initalState,
  reducers:{
    toggleSidebar(state,action){
      state.SideBar.open=!state.SideBar.open;
    },
    updateSidebarType(state,action){
      state.SideBar.type=action.payload.type;
    }
  }
})
export default slice.reducer;

export function ToogleSidebar(){
  return async()=>{
    dispatch(slice.actions.toggleSidebar());
  }
}
export  function updateSidebarType(type){
  return async() => {
    dispatch(slice.actions.updateSidebarType({type}));
  }
}