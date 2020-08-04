import React from 'react';

function CalendarImg(props) {

    return (
        <div className="jumbotron">
            <img
                className="img-fluid img-thumbnail"
                src={props.image}
                alt="calendarImage"
            />
        </div>
    )
};

export default CalendarImg;