import React from "react";
import Card from "./Card";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const MembershipCard = () => {
    const data = useStaticQuery(graphql`
        query MembershipQuery {
            contentfulStaticMembershipRichTextNode {
                json
            }
        }
    `);
    return (
        <Card concat={true}>
            {documentToReactComponents(
                data.contentfulStaticMembershipRichTextNode.json
            )}
        </Card>
    );
};

export default MembershipCard;
