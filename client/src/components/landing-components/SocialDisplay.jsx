import {FaAngellist, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";

function SocialDisplay({className=""}) {
  return (
    <ul className={`text-3xl flex gap-2 border-b-2 border-white w-fit ${className}`}>

        <li>
            <a href="https://www.linkedin.com/in/tylerperata/" target="_blank">
                <FaLinkedin/>
            </a>
        </li>

        <li>
            <a href="https://github.com/TylerP99" target="_blank">
                <FaGithub/>
            </a>
        </li>

        <li>
            <a href="https://twitter.com/TylerMP99" target="_blank">
                <FaTwitter/>
            </a>
        </li>

        <li>
            <a href="https://wellfound.com/u/tyler-perata" target="_blank">
                <FaAngellist/>
            </a>
        </li>
        
    </ul>
  )
}

export default SocialDisplay