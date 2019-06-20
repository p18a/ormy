import React from "react";

import ClockIcon from "../icons/clock.svg";
import CompassIcon from "../icons/compass.svg";
import PropTypes from "prop-types";

const EventFooter = ({ date, location }) => {
    return (
        <div className="flex flex-col md:flex-row items-start text-gray-500 pt-2">
            <span className="inline-flex flex-shrink items-start">
                <ClockIcon className="h-6 w-6 fill-current flex-shrink-0" />
                <span className="pl-2 text-gray-300">{date}</span>
            </span>
            <span className="inline-flex items-start pt-2 md:pt-0 md:pl-4">
                <CompassIcon className="h-6 w-6 fill-current flex-shrink-0" />
                <span className="pl-2 text-gray-300">{location}</span>
            </span>
        </div>
    );
};

EventFooter.propTypes = {
    date: PropTypes.string,
    location: PropTypes.string,
};

export default EventFooter;
