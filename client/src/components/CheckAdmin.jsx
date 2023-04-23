import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { extendedApiSlice } from "../features/post/postsSlice";
import { getContacts } from "../features/contact/contactSlice";
import { getAllProjects } from "../features/project/projectSlice";

function CheckAdmin() {

  const dispatch = useDispatch();
  
  dispatch(extendedApiSlice.endpoints.getPosts.initiate());
  dispatch(getContacts());
  dispatch(getAllProjects());

  return (
    <Outlet/>
  )
}

export default CheckAdmin