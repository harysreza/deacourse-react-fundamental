import React from "react";
import { Container } from "react-bootstrap";
import Background from "../../assets/cloud.jpg";

const Homepage = () => {
  return (
    <React.Fragment>
      <Container>
        <Container
          className="mt-4 p-5 rounded mb-4"
          style={{
            backgroundImage: `linear-gradient(to right bottom, rgba(23, 74, 144, 0.8), rgba(142, 226, 178, 0.6)), url(${Background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "rgba(0, 0, 0, 0.8)",
          }}
        >
          <h1 className="display-4 fst-italic">
            “I am always doing that which I cannot do, in order that I may learn
            how to do it.”
          </h1>
          <p className="lead text-end mt-5 fw-semibold">- Pablo Picasso</p>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Homepage;
