// import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import API from "../utils/API";
// import Nav from "../components/Nav";
// import { useStoreContext } from "../utils/GlobalState";

// import { SET_CURRENT_POST, UPDATE_POSTS, LOADING } from "../utils/actions";


// const Detail = props => {
//   const titleRef = useRef();
//   const bodyRef = useRef();
//   const authorRef = useRef();
//   const [state, dispatch] = useStoreContext();

//   useEffect(() => {
//     API.getPost(props.match.params.id)
//       .then(res => dispatch({ type: SET_CURRENT_POST, post: res.data }))
//       .catch(err => console.log(err));
//   }, []);

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch({ type: LOADING });
//     API.savePost({
//     // API.updatePost({

//       title: titleRef.current.value,
//       body: bodyRef.current.value,
//       author: authorRef.current.value
//     })
//       .then(result => {
//         dispatch({
//           // type: ADD_FAVORITE,
//           type: UPDATE_POSTS,
//           // type: ADD_POST,
//           // post: state.currentPost
//           post: result.data
//         });
//       })
//       .catch(err => console.log(err));

//     titleRef.current.value = "";
//     bodyRef.current.value = "";
//   };



//   return (
//     <>
//       <Nav />
//       {state.currentPost ? (
//         <Container fluid>
//           <form onSubmit={handleSubmit}>
//             <Row>
//               <Col size="md-12">
//                 <div className="form-group">
//                   <label htmlFor="display_name">Title:</label>
//                   <input className="form-control" required ref={titleRef} name="display_name" type="text" defaultValue={state.currentPost.title} />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="about">Detail:</label>
//                   <input name="about" required ref={bodyRef} type="text" defaultValue={state.currentPost.body} />
//                   <div id="editor-container">
//                   </div>
//                 </div>


//                 <div className="form-group">
//                   <label htmlFor="location">Name:</label>
//                   <input className="form-control" ref={authorRef} name="location" type="text" defaultValue={state.currentPost.author} />
//                 </div>

//                 <button className="btn btn-success mt-3 mb-3" disabled={state.loading} type="submit">
//                   Save
//                 </button>

//               </Col>
//             </Row>

//             <Row>
//               <Col size="md-2">
//                 <Link to="/home">← Back to Dashboard Home</Link>
//               </Col>
//             </Row>
//           </form>
//         </Container>
//       ) : (
//           <div>Test</div>
//         )}

//     </>
//   );
// };

// export default Detail;


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
