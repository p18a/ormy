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
        }
    `);

    const sponsors = data.allContentfulSponsor.edges.map((edge, i) => (
        <a
            key={i}
            href={edge.node.link}
            style={{
                width: "100%",
                maxWidth: "15rem",
                height: "100%",
                display: "inline-block",
                flexBasis: "20rem",
            }}
        >
            <Image imgStyle={{filter: "brightness(0) invert(1)"}} fluid={edge.node.image.fluid}></Image>
        </a>
    ));

    return (
        <div className="min-h-64 h-full bg-dark-900 z-10 flex flex-wrap items-center justify-around">
            {sponsors}
        </div>
    );
};

export default Footer;
