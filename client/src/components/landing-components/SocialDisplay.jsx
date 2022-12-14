import {FaAngellist, FaInstagram, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";

function SocialDisplay() {
  return (
    <ul className="text-6xl">

        <li>
            <Link>
                <FaLinkedin/>
            </Link>
        </li>

        <li>
            <Link>
                <FaGithub/>
            </Link>
        </li>

        <li>
            <Link>
                <FaTwitter/>
            </Link>
        </li>

        <li>
            <Link>
                <FaAngellist/>
            </Link>
        </li>

        <li>
            <Link>
                <FaInstagram/>
            </Link>
        </li>
        
    </ul>
  )
}

export default SocialDisplay