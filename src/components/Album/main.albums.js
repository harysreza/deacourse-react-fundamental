import React from "react";
import { Container } from "react-bootstrap";
import AlbumCollection from "./collection.albums";

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h1 className="mt-4 mb-4">Photos API</h1>
        <AlbumCollection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
