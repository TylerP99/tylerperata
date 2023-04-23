import { Outlet } from "react-router-dom";
import  { useDispatch } from "react-redux";

import { projectApiSlice } from "./projectSlice";

function LoadProjects() {
  
  const dispatch = useDispatch();

  dispatch(projectApiSlice.endpoints.getProjects.initiate());

  return (
    <Outlet/>
  )
}

export default LoadProjects