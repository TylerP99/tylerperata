import { FaReact, FaHtml5, FaCss3, FaJs, FaNode,  } from "react-icons/fa";
import {SiTailwindcss, SiExpress} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function Technology({text}) {


  const selectIcon = (text) => {
    switch(text.toLowerCase()) {
      case "react":
        return FaReact;
      case "html":
        return FaHtml5;
      case "css":
        return FaCss3;
      case "javascript":
        return FaJs;
      case "nodejs":
        return FaNode;
      case "tailwindcss":
        return SiTailwindcss;
      case "expressjs":
        return SiExpress;
      case "apis":
        return TbApi;
      default:
        return null;
    }
  }

  const Icon = selectIcon(text);

  return (
    <div className="flex gap-2 items-center border px-2 py-1">
        {Icon !== null ? <Icon/> : undefined}
        <p>{text}</p>
    </div>
  )
}

export default Technology