import {FaAngellist, FaInstagram, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";

function SocialDisplay() {
  return (
    <ul className="text-3xl flex">

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