import { Link } from "react-router-dom";

function InternalLinkButton({text="", to="#", className=""}) {
  return (
    <div
    className={`${className} text-xl text-white bg-black`}>
      <Link
      to={to}
      className="block px-20 py-5 border-2 rounded-full hover:bg-white/20"
      >{text}</Link>
    </div>
  )
}

export default InternalLinkButton