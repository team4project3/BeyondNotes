import React, { useEffect } from "react";
import { ListItem, List } from "../List";
import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
// import PostIt from "../PostsList/postit.jpg";
import PenPaper from "../PostsList/penpaper.jpg";
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

      <Slider />
      {/* <div class="card-image">
          <img src={PenPaper} />
          <span class="card-title">Test Text</span>
        </div> */}

      <div class="card blue-grey darken-1 z-depth-4">
        <div class="card-content">
          {/* <h4 className="dashboardH3">Click on a note to view</h4> */}
          {state.posts.length ? (
            <List>
              {state.posts.map(post => (
                <ListItem key={post._id}>
                  <Link to={"/posts/" + post._id}>
                    <strong>
                      {post.title} by {post.author}
                    </strong>
                  </Link>
                  <DeleteBtn onClick={() => removePost(post._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
              <h4 className="dashboardH3">Memos are Clear for Now</h4>
            )}
        </div>

        <div class="card-action">
          <div className="mt-5 viewImportant">
            <Link to="favorites">View Important Items</Link>
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
        </div>
      </div>

    </div>
  );
}

export default PostsList;
