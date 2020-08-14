import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import Slider from "../Carousel"

function PostsList() {
  const [state, dispatch] = useStoreContext();

  const removePost = id => {
    API.deletePost(id)
      .then(() => {
        dispatch({
          type: REMOVE_POST,
          _id: id
        });
      })
      .catch(err => console.log(err));
  };

  const getPosts = () => {
    dispatch({ type: LOADING });
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
{/* Carousel */}
      <Slider />

      {/* <div class="card-image">
          <img src={PenPaper} />
          <span class="card-title">Test Text</span>
        </div> */}

      <div className="card blue-grey darken-1 z-depth-4">
        <div className="card-content">
          

        </div>
        {/* <div className="card-action">
          <div className="mt-5 viewImportant">
            <Link to="notelist">View Notes List</Link>
          </div>
          <div className="mt-5 viewImportant">
            <Link to="calendar">View Calendar</Link>
          </div>
          <div className="mt-5 viewImportant">
            <Link to="register">Register</Link>
          </div>
          <div className="mt-5 viewImportant">
            <Link to="login">Login In</Link>
          </div>
        </div> */}

      </div>

    </div>
  );
}

export default PostsList;


// {state.posts.length ? (
//   <List>
//     <h4 className="dashboardH3">Click on a Note to Edit</h4>

//     {state.posts.map(post => (
//       <ListItem key={post._id}>
//         {/* <Link to={"/notelist/"}> */}
//         <Link to={"/posts/" + post._id}>
//           <strong>
//             {post.title} - {post.body}. Entered By: {post.author}
//           </strong>
//         </Link>
//         <DeleteBtn onClick={() => removePost(post._id)} />
//       </ListItem>
//     ))}
//   </List>
// ) : (
//     <h4 className="dashboardH3">Your Note List is Empty</h4>
//   )}