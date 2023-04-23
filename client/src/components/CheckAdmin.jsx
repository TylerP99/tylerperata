import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postsApiSlice } from "../features/post/postsSlice";
import { getContacts } from "../features/contact/contactSlice";
import { projectApiSlice } from "../features/project/projectSlice";

function CheckAdmin() {

  const dispatch = useDispatch();
  
  dispatch(postsApiSlice.endpoints.getPosts.initiate());
  dispatch(getContacts());
  dispatch(projectApiSlice.endpoints.getProjects.initiate());

  return (
    <Outlet/>
  )
}

export default CheckAdmin