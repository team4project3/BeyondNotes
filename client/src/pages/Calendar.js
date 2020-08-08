import React, {Component} from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar';
import Views from "../Views";
import events from '../events';
import 'moment/locale/nb';
import moment from "moment";
import ExampleControlSlot from '../ExampleControlSlot'
import 'react-big-calendar/lib/css/react-big-calendar.css';
const localizer = momentLocalizer(moment)
const propTypes = {}

class MyBigCalendar extends Component {
  constructor(...args) {
    super(...args)

    this.state = { events }
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }
   
  render() {
    return (
      <>
        <ExampleControlSlot.Entry waitForOutlet>
          <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
          </strong>
        </ExampleControlSlot.Entry>
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        />
      </>
    )
  }
}
MyBigCalendar.propTypes = propTypes

export default MyBigCalendar;