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
                <h2>
                    <span className="flex items-center">
                        <span className="pr-2">{edge.node.title}</span>
                        <Link
                            to={edge.node.fields.slug}
                            aria-label={`Avaa tapahtuma`}
                        >
                            <OpenIcon />
                        </Link>
                    </span>
                </h2>
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
