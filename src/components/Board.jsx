import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";

import Card from "./Card";

const Board = ({ year, board, officials, image }) => {
    const boardElem = board ? (
        <>
            <h2>Hallituksen jäsenet</h2>
            <ul className="mb-2">
                {board.map(member => (
                    <li className="mb-1">{member}</li>
                ))}
            </ul>
        </>
    ) : null;

    const officialsElem = officials ? (
        <>
            <h2>Toimihenkilöt</h2>
            <ul className="mb-2">
                {officials.map(member => (
                    <li className="mb-1">{member}</li>
                ))}
            </ul>
        </>
    ) : null;

    return (
        <>
            <h1>Hallitus {year}</h1>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/3">
                    {boardElem}
                    {officialsElem}
                </div>
                <div className="w-full md:w-1/2 lg:w-2/3">
                    <Image
                        className="grayscale"
                        style={{ maxWidth: "100%" }}
                        fluid={image}
                    />
                </div>
            </div>
        </>
    );
};

Board.propTypes = {
    year: PropTypes.number.isRequired,
    board: PropTypes.arrayOf(PropTypes.string),
    officials: PropTypes.arrayOf(PropTypes.string),
};

export default Board;
