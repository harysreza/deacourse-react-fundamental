import React from "react";
import { Container } from "react-bootstrap";
import PostCollection from "./collection.posts";

const Posts = () => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h1 className="mt-4 mb-4">Posts API</h1>
        <PostCollection />
      </Container>
    </React.Fragment>
  );
};

export default Posts;
