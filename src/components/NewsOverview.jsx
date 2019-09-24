import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Card from "./Card.jsx";
import OpenIcon from "../icons/open.svg";

const NewsOverview = () => {
    const data = useStaticQuery(graphql`
        query NewsOverviewQuery {
            allContentfulNews(
                filter: { fields: { expired: { eq: false } } }
                sort: { fields: createdAt, order: ASC }
                limit: 5
            ) {
                edges {
                    node {
                        title
                        createdAt(formatString: "DD. MM. YYYY")
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    const results = data.allContentfulNews || [];

    const news = results.edges.map((edge, i) => (
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
                            aria-label={`Avaa tiedote`}
                        >
                            <OpenIcon />
                        </Link>
                    </span>
                </h2>

                <div className="text-gray-500">
                    <span>{`Julkaistu ${edge.node.createdAt}`}</span>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            {news.length ? (
                <Card>
                    <h1>Tiedotteet</h1>
                    {news}
                </Card>
            ) : null}
        </>
    );
};

export default NewsOverview;
