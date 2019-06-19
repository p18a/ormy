import React from "react";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../components/Layout.jsx";
import Card from "../components/Card.jsx";
import SEO from "../components/SEO.jsx";
import EventFooter from "../components/EventFooter.jsx";

const EventPost = ({ data }) => {
    const post = data.contentfulEvent;

    return (
        <>
            <SEO title={post.title ? post.title : null} />
            <Layout>
                <div className="container">
                    <Card>
                        {post.title ? <h1>{post.title}</h1> : null}
                        {documentToReactComponents(
                            post.childContentfulEventDescriptionRichTextNode
                                .json
                        )}
                        <EventFooter
                            date={post.date}
                            location={post.location}
                        ></EventFooter>
                    </Card>
                </div>
            </Layout>
        </>
    );
};

export const query = graphql`
    query($id: String) {
        contentfulEvent(id: { eq: $id }) {
            date(formatString: "DD. MM. YYYY HH:mm")
            childContentfulEventDescriptionRichTextNode {
                json
            }
            location
            title
        }
    }
`;

export default EventPost;
