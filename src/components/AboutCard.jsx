import React from "react";
import Card from "./Card";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AboutCard = () => {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            contentfulStaticAboutRichTextNode {
                json
            }
        }
    `);
    return (
        <Card concat={true}>
            {documentToReactComponents(
                data.contentfulStaticAboutRichTextNode.json
            )}
        </Card>
    );
};

export default AboutCard;
