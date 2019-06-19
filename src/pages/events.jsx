import React from "react";
import Layout from "../components/Layout.jsx";
import PastEvents from "../components/PastEvents.jsx";
import SEO from "../components/SEO.jsx";
import FutureEvents from "../components/FutureEvents.jsx";

const EventsPage = () => (
    <>
        <SEO title={"Tapahtumat"} />
        <Layout>
            <div className="container">
                <FutureEvents />
                <PastEvents />
            </div>
        </Layout>
    </>
);

export default EventsPage;
