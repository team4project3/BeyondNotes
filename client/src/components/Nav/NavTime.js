import React  from 'react';
import Moment from 'react-moment';
import 'moment-timezone'; 
// import moment from 'moment';
// moment().format();
//to work with a particular variation of moment timezone, for example using only data from 2012-2022
// import moment from 'moment-timezone/builds/moment-timezone-with-data-2012-2022';

// const dateToFormat = moment().format('LLLL');

export default class NavTime extends React.Component {
    
    render() {
        return (
            
            <Moment interval={60}></Moment>
        );
    }
}