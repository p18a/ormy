import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, content }) => (
    <section className="whitespace-pre-line p-4">
        {title ? (
            <div className="pb-2">
                <h1>{title}</h1>
            </div>
        ) : null}
        <div>{content}</div>
    </section>
);

Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired,
};

export default Card;
