import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-transition-group";

import CloseIcon from "../icons/close.svg";
import HomeIcon from "../icons/home.svg";
import InfoIcon from "../icons/info.svg";
import CalendarIcon from "../icons/calendar.svg";
import MailIcon from "../icons/mail.svg";

const transition = 200;

const defaultStyle = {
    transition: `opacity ${transition}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const NavModal = ({ modalOpen, handleModal }) => {
    return (
        <Transition
            in={modalOpen}
            timeout={transition}
            mountOnEnter={true}
            unmountOnExit={true}
        >
            {state => (
                <nav
                    className="block md:hidden fixed top-0 inset-x w-full p-4 z-50"
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                >
                    <div
                        className="flex flex-col justify-between w-full rounded bg-dark-500"
                        style={{
                            boxShadow:
                                "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
                        }}
                    >
                        <div className="flex justify-between items-start">
                            <ul className="flex flex-col items-left p-6">
                                <li className="inline-flex items-center justify-start font-semibold text-light text-xl py-3">
                                    <HomeIcon />
                                    <a className="pl-2 nav-link" href="/">
                                        Etusivu
                                    </a>
                                </li>
                                <li className="inline-flex items-center justify-start font-semibold text-light text-xl py-3">
                                    <CalendarIcon />
                                    <a className="pl-2 nav-link" href="/events">
                                        Tapahtumat
                                    </a>
                                </li>
                                <li className="inline-flex items-center justify-start font-semibold text-light text-xl py-3">
                                    <InfoIcon />
                                    <a className="pl-2 nav-link" href="/info">
                                        Info
                                    </a>
                                </li>
                            </ul>
                            <button
                                className="btn btn--text p-4"
                                onClick={handleModal}
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="rounded-b bg-dark-500 p-6">
                            <span className="inline-flex items-center justify-start">
                                <MailIcon />
                                <a
                                    className="font-semibold text-light text-lg pl-2 py-2 nav-link"
                                    href="/email-signup"
                                >
                                    Liity sähköpostilistalle
                                </a>
                            </span>
                        </div>
                    </div>
                </nav>
            )}
        </Transition>
    );
};

NavModal.propTypes = {
    modalOpen: PropTypes.bool,
    handleModal: PropTypes.func,
};

export default NavModal;
