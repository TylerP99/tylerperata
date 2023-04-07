import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getContacts } from "../features/contact/contactSlice";

function CheckAdmin() {

  const dispatch = useDispatch();
  
  dispatch(getContacts());

  return (
    <Outlet/>
  )
}

export default CheckAdmin