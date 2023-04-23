import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { postsApiSlice } from "./postsSlice";

function LoadPosts() {
  const dispatch = useDispatch();
  dispatch(postsApiSlice.endpoints.getPosts.initiate());
  
  return (
      <Outlet/>
  )
}

export default LoadPosts