import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
// import CalendarView from "../pages/App";
import Nav from "../components/Nav";
import Quotes from "../components/Quotes/Quote";

const Home = () => {
  return (
    <>
      <div className="homeBackground">
        <Nav />
        <div className="row">
          {/* <h1 className="dashboard-title">Dashboard</h1> */}
          <div className="col m4 s6">
            <div className="card blue-grey darken-1 z-depth-3">
              <div className="card-content white-text">
                <CreatePostForm />
              </div>
            </div>
          </div>

          <div className="col m8 s6">
            <PostsList />
          </div>
        </div>
        <div className="row">
          <div className="col m8 s6">
            <Quotes />
          </div>
        </div>
      </div>
    </>
  );
};

// Previous
// const Home = () => {
//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-4 sm-6">
//           <CreatePostForm />
//         </Col>
//         <Col size="md-8 sm-6">
//           <PostsList />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

export default Home;
