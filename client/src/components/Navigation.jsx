

import {NavLink} from "react-router-dom";

function Navigation() {


    // Tailwind styles
    const navLayout = "flex justify-end";
    const navStyles = "bg-black";
    const navStyle = `${navStyles} ${navLayout}`;

    const ulLayout = "flex justify-evenly space-x-8 p-5";
    const ulStyles = "";
    const ulStyle = `${ulStyles} ${ulLayout}`;

    const liLayout = "";
    const liStyles = "";
    const liStyle = `${ulStyles} ${liLayout}`;

    const linkLayout = "";
    const linkStyles = "hover:text-blue";
    const linkActive = "text-green";
    const linkInactive = "text-white"
    const linkStyle = `${linkStyles} ${linkLayout}`

    return (
        <nav className={navStyle}>

            <ul className={ulStyle}>

                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive : linkInactive)}
                    exact to="/"
                    >Home</NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive : linkInactive)}
                    to="/portfolio"
                    >Portfolio</NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive : linkInactive)}
                    to="/resume"
                    >Resume</NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive: linkInactive)}
                    to="/freelancing"
                    >Freelancing</NavLink>
                </li>
                <li className={liStyle}>
                    <NavLink
                    className={({ isActive }) => linkStyle + " " + (isActive ? linkActive : linkInactive)}
                    to="/blog"
                    >Blog</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navigation