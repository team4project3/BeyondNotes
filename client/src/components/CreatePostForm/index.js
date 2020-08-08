import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { Link } from "react-router-dom";


import CalendarImg from '../Calendar/calendar_img';
import Calendar from "../../img/calendar.jpg";

function CreatePostForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div>
      {/* <div className="jumbotron">
        <CalendarImg image={Calendar}
        />
      </div> */}

      {/* Add notes/activity */}
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Add Item to Agenda</span>
          <form className="form-group mt-3 mb-3" onSubmit={handleSubmit}>
            <input className="form-control mb-3" required ref={titleRef} placeholder="Title" />
            <textarea className="form-control mb-3" required ref={bodyRef} placeholder="Body" />
            <input className="form-control mb-3" ref={authorRef} placeholder="Name" />

            <div class="card-action">
              <button className="btn btn-success mt-3 mb-3" disabled={state.loading} type="submit">
                Add
          </button>
            </div>
          </form>
        </div>
      </div>

      {/* Links to other pages? */}
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Other Items</span>
          <div class="card-action" onSubmit={handleSubmit}>

                <button className="homeList btn btn-success mt-3 mb-3" disabled={state.loading} type="submit">
                  <Link to="calendar">Calendar</Link>
                </button>

                <button className="homeList btn btn-success mt-3 mb-3" disabled={state.loading} type="submit">
                  <Link to="favorites">Important Items</Link>
                </button>

                <button className="homeList btn btn-success mt-3 mb-3" disabled={state.loading} type="submit">
                  <Link to="register">Register</Link>
                </button>

                <button className="homeList btn btn-success mt-3 mb-3" disabled={state.loading} type="submit">
                  <Link to="login">Login In</Link>
                </button>

          </div>
          </div>
        </div>
      </div>
  );
}

export default CreatePostForm;
