import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../../components/Layout";
import Board from "../../components/Board";
import Card from "../../components/Card";

const BoardsPage = () => {
    const data = useStaticQuery(graphql`
        query BoardsQuery {
            allContentfulBoard(sort: { fields: year, order: DESC } limit: 20) {
                edges {
                    node {
                        year
                        officials
                        boardMembers
                        image {
                            fluid(quality: 90) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `);

    const result = data.allContentfulBoard ? data.allContentfulBoard.edges : [];

    const boardElems = result.map((entry, i) => (
        <Card>
            <Board
                year={entry.node.year}
                board={entry.node.boardMembers}
                officials={entry.node.officials}
                image={entry.node.image.fluid}
            />
        </Card>
    ));

    return (
        <Layout>
            <div className="container">{boardElems}</div>
        </Layout>
    );
};

export default BoardsPage;
