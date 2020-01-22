import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SponsorQuery {
            allContentfulSponsor(
                limit: 8
                sort: { fields: ordinal, order: ASC }
            ) {
                edges {
                    node {
                        image {
                            fluid(maxHeight: 150) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        link
                    }
                }
            }
            contentfulConfig {
                notes
            }
        }
    `);

    const sponsorResult = data.allContentfulSponsor
        ? data.allContentfulSponsor.edges
        : [];
    const notesResult = data.contentfulConfig
        ? data.contentfulConfig.notes
        : [];

    const sponsors = sponsorResult.map((edge, i) => (
        <a
            key={i}
            href={edge.node.link}
            style={{
                width: "100%",
                maxWidth: "15rem",
                height: "100%",
                display: "inline-block",
                flexBasis: "20rem",
                padding: "1rem",
            }}
        >
            <Image
                fluid={edge.node.image.fluid}
            ></Image>
        </a>
    ));

    const notes = notesResult.map((note, i) => <span key={i} className="text-light">{note}</span>);

    return (
        <div className="bg-dark-900 z-10">
            <div className="flex flex-wrap items-center justify-around">
                {sponsors}
            </div>
            {notes ? (
                <div className="flex flex-col items-center text-dark-100">
                    {notes}
                </div>
            ) : null}
        </div>
    );
};

export default Footer;
