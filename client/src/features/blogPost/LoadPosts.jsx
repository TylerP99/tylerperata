import { useDispatch } from "react-redux"
import { getPosts } from "./blogPostSlice"

function LoadPosts() {
  const dispatch = useDispatch();
  dispatch(getPosts);
  return (
      <></>
  )
}

export default LoadPosts