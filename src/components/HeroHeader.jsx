import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const HeroHeader = () => {
    const data = useStaticQuery(graphql`
        query HeroHeaderQuery {
            contentfulConfig {
                headerBg {
                    fluid(quality: 90) {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
        }
    `);
    
    return (
        <Image
            style={{ height: "100%" }}
            fluid={data.contentfulConfig.headerBg.fluid}
        ></Image>
    );
};

export default HeroHeader;
