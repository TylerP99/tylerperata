import { useDispatch } from "react-redux";
import { getPosts } from "./blogPostSlice";
import { Outlet } from "react-router-dom";

function LoadPosts() {
  const dispatch = useDispatch();
  dispatch(getPosts());
  
  return (
      <Outlet/>
  )
}

export default LoadPosts