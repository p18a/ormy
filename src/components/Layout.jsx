import React, { useState } from "react";

import Navbar from "./Navbar.jsx";
import NavModal from "./NavModal.jsx";
import Footer from "./Footer.jsx";

const Layout = ({ children }) => {
    const [modalOpen, setModal] = useState(false);

    return (
        <>
            <div className="flex flex-col relative min-h-screen bg-dark-900 pt-16">
                <div className="fixed top-0 h-16 w-full z-40">
                    <Navbar
                        links={[
                            { title: "Etusivu", url: "/" },
                            { title: "Tapahtumat", url: "/events" },
                            { title: "Info & Jäsenyys", url: "/info" },
                        ]}
                        handleModal={() => setModal(true)}
                    />
                </div>
                {children}
                <div className="flex-1" />
                <Footer></Footer>
            </div>
            <NavModal
                modalOpen={modalOpen}
                handleModal={() => setModal(false)}
            />
        </>
    );
};

export default Layout;
