import React, { useState } from "react";

import Navbar from "./Navbar.jsx";
import NavModal from "./NavModal.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
    const [modalOpen, setModal] = useState(false);

    return (
        <>
            <div className="flex flex-col relative min-h-screen bg-dark-900">
                <Navbar
                    links={[
                        { title: "Etusivu", url: "/" },
                        { title: "Tapahtumat", url: "/events" },
                        { title: "Info", url: "/info" },
                    ]}
                    handleModal={() => setModal(true)}
                />
                {children}
                <div className="flex-1" />
            </div>
            <NavModal
                modalOpen={modalOpen}
                handleModal={() => setModal(false)}
            />
        </>
    );
};

export default Layout;
