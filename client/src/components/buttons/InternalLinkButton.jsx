import { Link } from "react-router-dom";

function InternalLinkButton({text="", to="#", className=""}) {
  return (
    <Link
    to={to}
    className={`${className} border text-white bg-black`}
    >{text}</Link>
  )
}

export default InternalLinkButton