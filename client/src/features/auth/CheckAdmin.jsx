import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postsApiSlice } from "../post/postsSlice";
import { messageApiSlice } from "../message/messageSlice";
import { projectApiSlice } from "../project/projectSlice";

function CheckAdmin() {

  const dispatch = useDispatch();
  
  dispatch(postsApiSlice.endpoints.getPosts.initiate());
  dispatch(messageApiSlice.endpoints.getMessages.initiate());
  dispatch(projectApiSlice.endpoints.getProjects.initiate());

  return (
    <Outlet/>
  )
}

export default CheckAdmin