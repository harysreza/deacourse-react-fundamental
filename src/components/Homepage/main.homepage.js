import React from "react";
import { Container } from "react-bootstrap";

const Homepage = () => {
  return (
    <React.Fragment>
      <Container className="mt-5 px-5">
        <h1 className="display-4 text-black">
          “I am always doing that which I cannot do, in order that I may learn
          how to do it.”
        </h1>
        <p
          className="lead text-end mt-5 text-black"
          style={{ fontWeight: "500" }}
        >
          - Pablo Picasso
        </p>
      </Container>
    </React.Fragment>
  );
};

export default Homepage;
