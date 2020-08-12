import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import Views from "../Views";
import events from '../events';
import moment from "moment";
import ControlSlot from '../ControlSlot'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Nav from "../components/Nav";
// import withDragandDRop from "react-big-calendar/lib/addons/dragAndDrop";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';


const localizer = momentLocalizer(moment)
const DraggableCalendar = withDragAndDrop(Calendar)
const propTypes = {}

class MyBigCalendar extends Component {
  constructor(...args){
    super(...args)

    const propTypes = {}

    this.state = {
      events: events,
      displayDragItemInCell: true
    }
    this.moveEvent = this.moveEvent.bind(this)
    this.newEvent = this.newEvent.bind(this)
  }
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
  }
  handleDragStart = event => {
    this.setState({ draggedEvent: event })
  }

  dragFromOutsideItem = () => {
    return this.state.draggedEvent
  }

  onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent } = this.state

    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    }

    this.setState({ draggedEvent: null })
    this.moveEvent({ event, start, end })
  }

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state

    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }



  // onEventResize = (data) => {
  //   const { start, end } = data;

  //   this.setState((state) => {
  //     state.events[0].start = start;
  //     state.events[0].end = end;
  //     return { events: state.events };
  //   });
  // };

  // onEventDrop = (data) => {
  //   console.log(data);
  // };

  

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
  newEvent(event){

  }

  render() {
    return (
      <>
        <Nav />
        <ControlSlot.Entry waitForOutlet>
          <strong>
            Click an event to see more info, or drag the mouse over the calendar
            to select a date/time range.
          </strong>
        </ControlSlot.Entry>
        <DraggableCalendar
          selectable
          style={{height: 500,width: "95%"}}
          localizer={localizer}
          events={this.state.events}
          // draggableAccessor={event => true}
          onEventDrop={this.moveEvent}
          onEventResize={this.resizeEvent}
          resizable
          onDragStart={console.log}
          dragFromOutsideItem={
            this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
          }
          onDropFromOutside={this.onDropFromOutside}
          handleDragStart={this.handleDragStart}
          popups={true}
          defaultView={Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect.bind(this)}
        />
      </>
    )
  }
}
MyBigCalendar.propTypes = propTypes

export default MyBigCalendar;