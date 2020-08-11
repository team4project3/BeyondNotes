//Format to create the current day displayed on the calendar
import React  from 'react';
import Moment from 'react-moment';
import 'moment-timezone'; 




export default class NavTime extends React.Component {
    
    render() {
        return (
            
            <Moment interval={60} format= "dddd, MMMM Do YYYY, h:mm:ss a "></Moment>
        );
    }
}