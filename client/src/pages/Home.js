import React from "react";
// import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";
// import CalendarView from "../pages/App";
import Nav from "../components/Nav";
import Quotes from "../components/Quotes/Quote";
import Corner from "../img/smallCorner.png"
import MagentaCorner from "../img/smallCornerMagenta.png"
import { Link } from "react-router-dom";
import "../index.css"


const Home = () => {
  return (
    <>
      <Nav />
      <div className="homeBackground">

        <div className="row homeRow z-depth-4">
          <div className="col m4 s6">
            <div className="card z-depth-3">
              <div className="card-content magentaCard z-depth-4">
                <h5 className="agendaH5">What's on the Agenda Today? </h5>
                <div className="card-action">
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
                <img className="magentaPageCorner" src={MagentaCorner} alt="page corner"></img>
              </div>
            </div>
          </div>
          <div className="col m8 s6">
            <Quotes />
          </div>
        </div>

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
