import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/Layout.jsx";
import Card from "../components/Card.jsx";
import SEO from "../components/SEO.jsx";

const NewsPost = ({ data }) => {
    const post = data.contentfulNews;

    return (
        <>
            <SEO title={post.title ? post.title : null} />
            <Layout>
                <div className="container">
                    <Card>
                        {post.title ? <h1>{post.title}</h1> : null}
                        {documentToReactComponents(
                            post.childContentfulNewsBodyRichTextNode.json
                        )}
                        <div className="text-gray-500">
                            <span>{`Julkaistu ${post.createdAt}`}</span>
                        </div>
                    </Card>
                </div>
            </Layout>
        </>
    );
};

export const query = graphql`
    query($id: String) {
        contentfulNews(id: { eq: $id }) {
            createdAt(formatString: "DD. MM. YYYY")
            childContentfulNewsBodyRichTextNode {
                json
            }
            fields {
                expired
            }
            title
        }
    }
`;

export default NewsPost;
