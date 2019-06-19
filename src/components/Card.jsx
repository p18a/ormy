import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import ChevronDownIcon from "../icons/chevron_down.svg";

const Card = ({ children, concat = false, threshold = 700 }) => {
    const [reveal, setReveal] = useState(true);
    const container = useRef(null);

    if (concat) {
        useEffect(() => {
            if (
                container.current &&
                container.current.clientHeight > threshold
            ) {
                console.log("a");
                setReveal(false);
            }
        }, []);
    }

    return (
        <section className="whitespace-pre-line p-4 flex-1">
            <div ref={container}>
                {reveal ? (
                    children
                ) : (
                    <>
                        <div
                            className="relative"
                            style={{ maxHeight: "600px", overflowY: "hidden" }}
                        >
                            {children}
                            <div className="card-fade"></div>
                        </div>
                        <div className="text-gray-300">
                            <button
                                className="text-lg font-semibold text-base pt-2"
                                onClick={() => setReveal(true)}
                            >
                                <span className="flex items-center">
                                    <span className="pr-2">Lue lisää</span>
                                    <ChevronDownIcon style={{marginTop: "4px"}}/>
                                </span>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

Card.propTypes = {
    title: PropTypes.string,
};

export default Card;
