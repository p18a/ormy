import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Card from "./Card.jsx";
import EventFooter from "./EventFooter.jsx";
import OpenIcon from "../icons/open.svg";

const FutureEventsOverview = () => {
    const data = useStaticQuery(graphql`
        query FutureEventsOverviewQuery {
            allContentfulEvent(
                filter: { fields: { upcoming: { eq: true } } }
                sort: { fields: date, order: ASC }
                limit: 5
            ) {
                edges {
                    node {
                        title
                        date(formatString: "DD. MM. YYYY HH:mm")
                        location
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const results = data.allContentfulEvent || [];

    const events = results.edges.map((edge, i) => (
        <div key={i}>
            {i !== 0 ? (
                <div className="border-b border-dark-100 w-full"></div>
            ) : null}
            <div className="py-4">
                <span className="flex items-start">
                    <h2 className="pr-2">{edge.node.title}</h2>
                    <Link
                        to={edge.node.fields.slug}
                        aria-label={`Avaa tapahtuma`}
                    >
                        <OpenIcon style={{ marginTop: "10px" }} />
                    </Link>
                </span>
                <EventFooter
                    date={edge.node.date}
                    location={edge.node.location}
                />
            </div>
        </div>
    ));

    return (
        <Card>
            <h1>Tulevat tapahtumat</h1>
            {events.length ? (
                events
            ) : (
                <p>
                    Ei tulevia tapahtumia listattuna. Örmyn hallitus
                    suunnittelee ja julkaisee säännöllisesti uusia tapahtumia
                    näillä sivuilla sekä Facebook -ryhmässä. Katso menneet
                    tapahtumat <Link to="/events">tapahtumasivulta</Link>.
                </p>
            )}
        </Card>
    );
};

export default FutureEventsOverview;
