import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Card from "./Card";
import EventFooter from "./EventFooter.jsx";
import OpenIcon from "../icons/open.svg";

const FutureEvents = ({ desc = true }) => {
    const data = useStaticQuery(graphql`
        query FutureEventsQuery {
            allContentfulEvent(
                filter: { fields: { upcoming: { eq: true } } }
                sort: { fields: date, order: ASC }
                limit: 5
            ) {
                edges {
                    node {
                        title
                        childContentfulEventDescriptionRichTextNode {
                            json
                        }
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

    if (!data.allContentfulEvent.edges.length) {
        return null;
    }

    return (
        <div>
            <h1 className="px-4 pt-4">Tulevat tapahtumat</h1>
            {data.allContentfulEvent.edges.map((edge, i) => (
                <Card key={i}>
                    <h2>
                        <span className="flex items-center">
                            <span className="pr-2">{edge.node.title}</span>
                            <Link to={edge.node.fields.slug} aria-label={`Avaa tapahtuma`}>
                                <OpenIcon style={{ marginTop: "6px" }} />
                            </Link>
                        </span>
                    </h2>
                    {desc
                        ? documentToReactComponents(
                              edge.node
                                  .childContentfulEventDescriptionRichTextNode
                                  .json
                          )
                        : null}
                    <EventFooter
                        date={edge.node.date}
                        location={edge.node.location}
                    />
                </Card>
            ))}
        </div>
    );
};

FutureEvents.propTypes = {
    desc: PropTypes.bool,
};

export default FutureEvents;
