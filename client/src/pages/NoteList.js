import React, { useEffect } from "react";
import { ListItem, List } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../utils/actions";
import API from "../utils/API";
import Nav from "../components/Nav";


const NoteList = () => {

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
    <>
      <Nav />
      <div className="container mb-5 mt-5">
        <h2 className="text-center">Note List:</h2>
        <div className="card blue-grey darken-1 z-depth-4">
          <div className="card-content">
            {state.posts.length ? (

              <List>
                <h5 className="text-center">Click on a Note to Edit</h5>

                {state.posts.map(post => (
                  <ListItem key={post._id}>
                    <Link to={"/posts/" + post._id}>
                      <strong>
                        {post.title} - {post.body}. Entered By: {post.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => removePost(post._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
                <h4 className="dashboardH3">Empty for Now!</h4>
              )}
          </div>

          <div className="mt-5">
            <Link to="home">Back to home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteList;


//------------Previous code for calling favorites after favorites button was clicked:

// import { REMOVE_FAVORITE, LOADING, UPDATE_FAVORITES } from "../utils/actions";

// const FavoritesList = () => {
//   const [state, dispatch] = useStoreContext();

//   const getFavorites = () => {
//     dispatch({ type: LOADING });
//     dispatch({ type: UPDATE_FAVORITES });
//   };

//   const removeFromFavorites = id => {
//     dispatch({
//       type: REMOVE_FAVORITE,
//       _id: id
//     });
//   };

//   useEffect(() => {
//     getFavorites();
//   }, []);

//   return (
//     <>
//       <Nav />
//       <div className="container mb-5 mt-5">
//         {state.favorites.length ? (
//           <List>
//             <h3 className="mb-5 mt-5">Click on an item to view in detail</h3>
//             {state.favorites.map(post => (
//               <ListItem key={post._id}>
//                 <Link to={"/posts/" + post._id}>
//                   <strong>
//                     {post.title} - {post.body}. Entered By: {post.author}
//                   </strong>
//                 </Link>
//                 <DeleteBtn onClick={() => removeFromFavorites(post._id)} />
//               </ListItem>
//             ))}
//           </List>
//         ) : (
//             <h3 className="text-center">Your schedule is clear for now. </h3>
//           )}
//       </div>

//       <div className="mt-5">
//         <Link to="home">Back to home</Link>
//       </div>
//     </>
//   );
// };

// export default FavoritesList;


