import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING} from "../../utils/actions";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./style.css";


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
          // type: ADD_FAVORITE,
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <>
      <div className="card orange z-depth-3">
        <div className="card-content white-text">

          <span className="card-title">Any notes you'd like to add today?</span>
          <form className="form-group mt-3 mb-3" onSubmit={handleSubmit}>
            <input className="form-control mb-3" required ref={titleRef} placeholder="Title" />
            <textarea className="form-control mb-3" required ref={bodyRef} placeholder="Body" />
            <input className="form-control mb-3" ref={authorRef} placeholder="Name" />

            <button className="btn btn-success mt-3 mb-3" type="submit">
              Add
            </button>
          </form>
        </div>
      </div>

      <div className="card z-depth-3">
          <div className="card-content magentaCard white-text">
            <h5>View: </h5>
              <div className="card-action">
                  <div className="mt-5 homeList">
                    <Link to="notelist">&#8226; Notes</Link>
                  </div>
                  {/* <br/> */}
                  <div className="mt-5 homeList">
                    <Link to="calendar">&#8226; Calendar</Link>
                  </div>
                  <div className="mt-5 homeList">
                    <Link to="gallery">&#8226; Photo Gallery</Link>
                  </div>
                  <div className="mt-5 homeList">
                    <Link to="login">&#8226; Log Out</Link>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default CreatePostForm;
