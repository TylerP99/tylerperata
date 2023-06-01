import { Link } from "react-router-dom";

function InternalLinkButton({text="", to="#", className=""}) {
  return (
    <div
    className={`${className} text-xl text-white bg-black`}>
      <Link
      to={to}
      className={`${className} border-2 py-2 block text-center rounded-sm hover:bg-white/20`}
      >{text}</Link>
    </div>
  )
}

export default InternalLinkButton