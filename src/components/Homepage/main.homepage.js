import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gambar from "../../assets/images.jpg";

const Homepage = () => {
  return (
    <React.Fragment>
      <Container className="mt-5 pb-5">
        <Row>
          <Col>
            <div className="p-5">
              <h1 className="display-4 text-black" style={{ fontSize: "4rem" }}>
                “I am always doing that which I cannot do, in order that I may
                learn how to do it.”
              </h1>
              <p
                className="lead text-end mt-5 text-black"
                style={{ fontSize: "2rem", fontWeight: "500" }}
              >
                - Pablo Picasso
              </p>
            </div>
          </Col>
          <Col>
            <img
              src={Gambar}
              className="img-fluid"
              alt="Responsive"
              style={{ width: "500px" }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Homepage;
