import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import MenuIcon from "../icons/menu.svg";
import MailIcon from "../icons/mail.svg";

const Navbar = ({ links, handleModal }) => {
    return (
        <div className="bg-dark-800 shadow-lg text-gray-200 h-full z-30 w-full">
            <nav className="hidden md:flex items-center justify-between flex-wrap max-w-6xl h-full mx-auto px-4">
                <ul className="flex flex-shrink mr-2">
                    {links.map((link, i) => (
                        <li
                            key={i}
                            className="font-semibold text-lg uppercase px-3 py-2 m-0"
                        >
                            <Link className="text-light no-underline uppercase" to={link.url}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <span className="inline-flex items-center">
                    <MailIcon></MailIcon>
                    <Link className="nav-link font-semibold no-underline text-light text-lg uppercase px-3 pr-2 pl-1" to="/email-signup">
                        Liity sähköpostilistalle
                    </Link>
                </span>
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
    links: PropTypes.arrayOf(PropTypes.object),
    handleModal: PropTypes.func.isRequired,
};

export default Navbar;
