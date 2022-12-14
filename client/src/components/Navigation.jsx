

import {NavLink} from "react-router-dom";

function Navigation() {


    // Tailwind styles
    const navLayout = "flex justify-end";
    const navStyles = "bg-red-300";
    const navStyle = `${navStyles} ${navLayout}`;

    const ulLayout = "flex justify-evenly space-x-8 p-5";
    const ulStyles = "";
    const ulStyle = `${ulStyles} ${ulLayout}`;

    const liLayout = "";
    const liStyles = "";
    const liStyle = `${ulStyles} ${liLayout}`;

    const linkLayout = "";
    const linkStyles = "hover:text-white";
    const linkActive = "text-yellow-200";
    const linkStyle = `${linkStyles} ${linkLayout}`

    return (
        <nav className={navStyle}>

            <ul className={ulStyle}>

                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive : "")}
                    exact to="/"
                    >Home</NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive : "")}
                    to="/portfolio"
                    >Portfolio</NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive : "")}
                    to="/resume"
                    >Resume</NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive: "")}
                    to="/freelancing"
                    >Freelancing</NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive : "")}
                    to="/blog"
                    >Blog</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navigation