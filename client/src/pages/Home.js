import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
// import CalendarView from "../pages/App";


const Home = () => {
  return (
    <div className="container">
      <div className="row">
        {/* <h1 className="dashboard-title">Dashboard</h1> */}
        <div className="col m4 s6">
          <div class="card blue-grey darken-1 z-depth-3">
            <div class="card-content white-text">
              <CreatePostForm />
            </div>
          </div>
        </div>
        <div className="col m8 s6">
          <PostsList />
        </div>
      </div>
    </div>

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
