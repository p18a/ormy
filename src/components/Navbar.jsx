import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import MenuIcon from "../icons/menu.svg";

const Navbar = ({ links, handleModal }) => {
    return (
        <div className="bg-dark-600 shadow-xl text-gray-200 h-20 z-20 sticky top-0 w-full">
            <nav className="hidden md:flex items-center justify-between flex-wrap max-w-6xl h-full mx-auto px-4">
                <ul className="flex flex-shrink mr-2">
                    {links.map((link, i) => (
                        <li key={i} className="font-semibold text-xl uppercase px-3 py-2">
                            <Link className="nav-link" to={link.url}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <button className="font-semibold text-xl uppercase px-3 py-2">abc</button>
            </nav>
            <nav className="md:hidden flex flex-row-reverse items-center h-full">
                <button className="btn btn--text" onClick={handleModal}>
                    <MenuIcon />
                </button>
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleModal: PropTypes.func.isRequired,
};

export default Navbar;
