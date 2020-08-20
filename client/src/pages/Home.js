import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
// import CalendarView from "../pages/App";
import Nav from "../components/Nav";
import Quotes from "../components/Quotes/Quote";
import Corner from "../img/smallCorner.png"
import { Link } from "react-router-dom";
import "../index.css"


const Home = () => {
  return (
    <>
      <div className="homeBackground">
        <Nav />

        <div className="row homeRow z-depth-4">
          {/* <div className="row card homeRow blue-grey darken-1 z-depth-4"> */}
          {/* <h1 className="dashboard-title">Dashboard</h1> */}
          <div className="col m4 s6">
            <div className="card magentaCard z-depth-3">
              <div className="card-content">
                <h5>What's on the Agenda Today? </h5>
                <div className="card-action">
                  <div className="mt-5 homeList">
                    <Link to="notelist">&#8226; Notes</Link>
                  </div>
                  <div className="mt-5 homeList">
                    <Link to="calendar">&#8226; Calendar</Link>
                  </div>
                  <div className="mt-5 homeList">
                    <Link to="contacts">&#8226; Contacts</Link>
                  </div>
                  <div className="mt-5 homeList">
                    <Link to="login">&#8226; Log Out</Link>
                  </div>
                </div>
                <img className="magentaPageCorner" src={Corner} alt="page corner"></img>
              </div>
            </div>
          </div>
          <div className="col m8 s6">
            <div className="card-content">
              <Quotes />
            </div>
          </div>
        </div>

        {/* <div className="row card homeRow blue-grey darken-1 z-depth-3"> */}
        <div className="row homeRow z-depth-3">
          <div className="col m4 s6">

            <div className="card-content white-text">
              <CreatePostForm />
            </div>
          </div>

          <div className="col m8 s6">
            <PostsList />
          </div>
        </div>

      </div>

      <img className="pageCorner" src={Corner} alt="page corner"></img>
    </>
  );
};

// Previous
// const Home = () => {
// return (
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
// );
// };

export default Home;
