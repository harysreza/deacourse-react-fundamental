import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalPopup = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="text-white"
    >
      <Modal.Header closeButton closeVariant="white" className="bg-dark">
        <Modal.Title id="contained-modal-title-vcenter">
          {`Post ${props.postid}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
        <h4>{props.title}</h4>
        <p>{props.body}</p>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        <Button variant="info" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPopup;
