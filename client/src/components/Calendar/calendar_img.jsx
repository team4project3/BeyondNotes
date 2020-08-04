import React from 'react';

function CalendarImg(props) {

    return (
            <img
                className="img-fluid img-thumbnail"
                src={props.image}
                alt="calendarImage"
            />
    )
};

export default CalendarImg;