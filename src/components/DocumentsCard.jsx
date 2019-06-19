import React from "react";
import Card from "./Card";
import { graphql, useStaticQuery } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const DocumentsCard = () => {
    const data = useStaticQuery(graphql`
        query DocumentsQuery {
            contentfulStaticDocumentsRichTextNode {
                json
            }
        }
    `);
    return (
        <Card>
            {documentToReactComponents(
                data.contentfulStaticDocumentsRichTextNode.json
            )}
        </Card>
    );
};

export default DocumentsCard;
