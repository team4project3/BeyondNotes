import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

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
      <div className="jumbotron">
        <CalendarImg image={Calendar}
        />
      </div>
      <h3>Add New Item to Schedule</h3>
      <form className="form-group mt-3 mb-3" onSubmit={handleSubmit}>
        <input className="form-control mb-3" required ref={titleRef} placeholder="Title" />
        <textarea className="form-control mb-3" required ref={bodyRef} placeholder="Body" />
        <input className="form-control mb-3" ref={authorRef} placeholder="Name" />
        <button className="btn btn-success mt-3 mb-3" disabled={state.loading} type="submit">
          Add to Calendar
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
