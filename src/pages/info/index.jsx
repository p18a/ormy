import React from "react";
import Layout from "../../components/Layout.jsx";
import MembershipCard from "../../components/MembershipCard.jsx";
import DocumentsCard from "../../components/DocumentsCard.jsx";
import ContactCard from "../../components/ContactCard.jsx";
import CurrentBoardCard from "../../components/CurrentBoardCard.jsx";

const InfoPage = () => (
    <Layout>
        <div className="container">
            <MembershipCard />
            <CurrentBoardCard />
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2">
                    <DocumentsCard />
                </div>
                <div className="w-full md:w-1/2">
                    <ContactCard />
                </div>
            </div>
        </div>
    </Layout>
);

export default InfoPage;
