import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <Container>
        <div class="d-flex justify-content-center">
          <div class="copyright">
            <p>
              Created by <span className="fw-bold fst-italic">harysreza</span>
            </p>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
