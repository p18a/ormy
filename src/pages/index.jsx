import React from "react";

import Layout from "../components/Layout.jsx";
import "../styles.css";
import ipsum from "../ipsum";
import Card from "../components/Card.jsx";

const IndexPage = () => (
    <>
        <Layout>
            <img
                src="http://i.imgur.com/lojmr.jpg"
                alt="bliss"
                style={{
                    height: "50vh",
                    width: "100%",
                    objectFit: "cover",
                    position: "fixed",
                    top: "5rem",
                }}
            />
            <div style={{ height: "50vh", width: "100%" }}></div>
            <div className="container py-8 px-4" style={{ zIndex: "2" }}>
                <div className="bg-dark-800 shadow-lg">
                    <Card title={"Ipsumia tänne"} content={ipsum}></Card>
                    <Card title={"Ipsumia tänne"} content={ipsum}></Card>
                    <Card title={"Ipsumia tänne"} content={ipsum}></Card>
                </div>
            </div>
        </Layout>
    </>
);

export default IndexPage;
