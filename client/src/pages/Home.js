import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreatePostForm from "../components/CreatePostForm";
import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-4 sm-6">
          <CreatePostForm />
        </Col>
        <Col size="md-8 sm-6">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
