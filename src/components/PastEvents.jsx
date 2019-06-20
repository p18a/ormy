import React from "react";
import { useStaticQuery, graphql, navigate, Link } from "gatsby";

import Card from "./Card";
import EventFooter from "./EventFooter.jsx";
import OpenIcon from "../icons/open.svg";

const PastEvents = () => {
    const data = useStaticQuery(graphql`
        query PastEventsQuery {
            allContentfulEvent(
                filter: { fields: { upcoming: { eq: false } } }
                sort: { fields: date, order: DESC }
                limit: 20
            ) {
                edges {
                    node {
                        date(formatString: "DD. MM. YYYY HH:mm")
                        title
                        location
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const pastEventsTrs = data.allContentfulEvent.edges.map((edge, i) => (
        <tr
            className="link-row"
            key={i}
            role="link"
            aria-label={`Avaa tapahtuma`}
            onClick={() => navigate(`${edge.node.fields.slug}`)}
        >
            <td>{edge.node.title ? edge.node.title : ""}</td>
            <td>{edge.node.date ? edge.node.date : ""}</td>
            <td>{edge.node.location ? edge.node.location : ""}</td>
        </tr>
    ));

    const pastEventsBlocks = data.allContentfulEvent.edges.map((edge, i) => (
        <div key={i}>
            {i !== 0 ? (
                <div className="border-b border-dark-100 w-full"></div>
            ) : null}
            <div className="py-4">
                <span className="flex justify-between items-start">
                    <h2>{edge.node.title ? edge.node.title : ""}</h2>
                    <Link to={edge.node.fields.slug} aria-label={`Avaa tapahtuma`}>
                        <OpenIcon style={{ marginTop: "6px" }} />
                    </Link>
                </span>
                <EventFooter
                    date={edge.node.date}
                    location={edge.node.location}
                ></EventFooter>
            </div>
        </div>
    ));

    return (
        <>
            <Card>
                <h1>Menneet tapahtumat</h1>
                <div className="block md:hidden">{pastEventsBlocks}</div>
                <table className="hidden md:table">
                    <thead>
                        <tr>
                            <th>Tapahtuma</th>
                            <th>Aika</th>
                            <th>Paikka</th>
                        </tr>
                    </thead>
                    <tbody>{pastEventsTrs}</tbody>
                </table>
            </Card>
        </>
    );
};

export default PastEvents;
