import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Nav from "../components/Nav";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_POST, UPDATE_POSTS, LOADING } from "../utils/actions";
import EditPageCorner from "../../src/img/smallCornerMagenta.png";


const Detail = props => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    API.getPost(props.match.params.id)
      .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    // API.savePost({
    API.updatePost(props.match.params.id, {

      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value

    })

      // State not needed to update on this page

      .catch(err => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
    authorRef.current.value = "";
  };



  return (
    <>
      <Nav />
      {/* {state.currentPost ? ( */}
      <Container fluid>
        <form onSubmit={handleSubmit}>
          <Row>
            <div className="col m2 s2" />
            <div className="container form-container">
              <div className="col m8 s8 editForm z-depth-3">

                <div className="form-group">
                  <label className="editLabel" htmlFor="display_name">Title:</label>
                  <input className="form-control" required ref={titleRef} name="display_name" type="text" defaultValue={state.currentPost.title} />
                </div>

                <div className="form-group">
                  <label className="editLabel" htmlFor="about">Detail:</label>
                  <input name="about" required ref={bodyRef} type="text" defaultValue={state.currentPost.body} />
                  <div id="editor-container">
                  </div>
                </div>

                <div className="form-group">
                  <label className="editLabel" htmlFor="location">Name:</label>
                  <input className="form-control" ref={authorRef} name="location" type="text" defaultValue={state.currentPost.author} />
                </div>


                <div className="row backHome">

                  <button className="editSaveButton mt-3 mb-3" type="submit">
                    Save
                  </button>

                  <div className="div-wrapper">
                    <img className="editPageCorner" src={EditPageCorner} alt="page corner"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="col m2 s2" />
          </Row>
          <Row>
          <Col size="s-3 md-3" />
            <Col size="s-6 md-6">
              <Link to="/home" className="backDashboard z-index-3">← Back to Home</Link>
            </Col>
            <Col size="s-3 md-3" />
          </Row>
        </form>

      </Container>
      {/* ) : (
           <div>Test</div>
         ) */}

    </>
  );
};

export default Detail;


// const addFavorite = () => {
//   dispatch({
//     type: ADD_FAVORITE,
//     post: state.currentPost
//   });
// };

// const removeFavorite = () => {
//   dispatch({
//     type: REMOVE_FAVORITE,
//     _id: state.currentPost._id
//   });
// };


{/* <Row>
      <Col size="md-10 md-offset-1">
        <article>
          <h1>Content:</h1>
          <p>{state.currentPost.body}</p>
        </article>
      </Col>
    </Row> */}


{/* {state.favorites.indexOf(state.currentPost) !== -1 ? (
      <button className="btn btn-danger" onClick={removeFavorite}>
        Remove from Important Items
      </button>
    ) : (
        <button className="btn" onClick={addFavorite}>
          ❤️ Add as Important
        </button>
      )} */}
