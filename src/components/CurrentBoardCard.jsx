import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import Board from "./Board";
import Card from "./Card";

const CurrentBoardCard = () => {
    const data = useStaticQuery(graphql`
        query CurrentBoardQuery {
            allContentfulBoard(sort: { fields: year, order: DESC }, limit: 1) {
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

    const result = data.allContentfulBoard
        ? data.allContentfulBoard.edges[0].node
        : null;

    if (!result) {
        return null;
    }

    return (
        <div>
            <Card>
                <Board
                    year={result.year}
                    board={result.boardMembers}
                    officials={result.officials}
                    image={result.image.fluid}
                />
                <div className="flex items-center justify-end">
                    <Link className="mt-2 text-light font-semibold" to="/info/boards">
                        Edellisvuosien hallitukset
                    </Link>
                </div>
            </Card>
        </div>
    );
};

export default CurrentBoardCard;
