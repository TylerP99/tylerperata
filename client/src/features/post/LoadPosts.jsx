import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { extendedApiSlice } from "./postsSlice";

function LoadPosts() {
  const dispatch = useDispatch();
  dispatch(extendedApiSlice.endpoints.getPosts.initiate());
  
  return (
      <Outlet/>
  )
}

export default LoadPosts