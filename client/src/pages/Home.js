import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
// import CalendarView from "../pages/App";
import Nav from "../components/Nav";


const Home = () => {
  return (
    <>
    <Nav></Nav>
    <div className="container">
      <div className="row">
        {/* <h1 className="dashboard-title">Dashboard</h1> */}
        <div className="col m4 s6">
          <CreatePostForm />
        </div>
        <div className="col m8 s6">
          <PostsList />
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
