import { useState } from "react";
import { NavLink } from "react-router-dom"

function Menu() {

    const [open, setOpen] = useState(false);

    const liStyle = "border";
    const linkStyle = "inline-block py-5 pl-2 w-full hover:underline";
    const linkActive = "";

    const menuToggle = (e) => {
        console.log(open);
        setOpen(!open);
    }

    return (
        <div>
            <header className="p-3 shadow-sm relative">
                {/* Open Nav */}
                <button 
                id="menu-btn" 
                className={"block hamburger md:hidden focus:outline-none" + ((open) ? " open" : "")}
                onClick={menuToggle}
                >
                    <div className="hamburger-top"></div>
                    <div className="hamburger-middle"></div>
                    <div className="hamburger-bottom"></div>
                </button>
                <nav className="hidden md:block">
                    <ul className="flex justify-end gap-10">
                        <li>
                            <NavLink
                            className={({ isActive }) => (isActive ? linkActive : "")}
                            exact to="/"
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                            className={({ isActive }) => (isActive ? linkActive : "")}
                            to="/portfolio"
                            >Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink
                            className={({ isActive }) => (isActive ? linkActive : "")}
                            to="/resume"
                            >Resume</NavLink>
                        </li>
                        <li>
                            <NavLink
                            className={({ isActive }) => (isActive ? linkActive: "")}
                            to="/freelancing"
                            >Freelancing</NavLink>
                        </li>
                        <li>
                            <NavLink
                            className={({ isActive }) => (isActive ? linkActive : "")}
                            to="/blog"
                            >Blog</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <nav id="menu" className={"absolute transition-transform w-full bg-white" + ((open) ? "" : " -translate-x-full")}>
                <ul className="flex flex-col">
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
        </div>
    )
}

export default Menu