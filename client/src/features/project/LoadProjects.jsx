import { Outlet } from "react-router-dom";
import  { useDispatch } from "react-redux";

import { getAllProjects } from "./projectSlice";

function LoadProjects() {
  
  const dispatch = useDispatch();

  dispatch(getAllProjects());

  return (
    <Outlet/>
  )
}

export default LoadProjects