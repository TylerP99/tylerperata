import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getContacts } from "../features/contact/contactSlice";
import { getAllProjects } from "../features/project/projectSlice";

function CheckAdmin() {

  const dispatch = useDispatch();
  
  dispatch(getContacts());
  dispatch(getAllProjects());

  return (
    <Outlet/>
  )
}

export default CheckAdmin