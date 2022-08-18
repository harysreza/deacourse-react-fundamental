import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <Container>
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3">
              {" "}
              <span className="text-danger">Opps!</span> Page not found.
            </p>
            <p className="lead">The page you’re looking for doesn’t exist.</p>
            <Link to="/" className="btn btn-dark">
              Go Home
            </Link>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default NotFound;
