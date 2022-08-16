import React from "react";
import { Container } from "react-bootstrap";
import PostCollection from "./collection.posts";

const Posts = () => {
  return (
    <React.Fragment>
      <Container>
        <h3 className="mt-4 mb-4">Posts API</h3>
        <PostCollection />
      </Container>
    </React.Fragment>
  );
};

export default Posts;
