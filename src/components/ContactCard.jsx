import React from "react";
import Card from "./Card.jsx";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const ContactCard = () => (
    <StaticQuery
        query={graphql`
            query ContactQuery {
                contentfulStaticContactRichTextNode {
                    json
                }
            }
        `}
        render={data => {
            return (
                <Card>
                    {documentToReactComponents(
                    data.contentfulStaticContactRichTextNode.json
                )}
                </Card>
            );
        }}
    />
);

export default ContactCard;
