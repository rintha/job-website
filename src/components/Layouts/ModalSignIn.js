import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import log from "../../assets/login-bg.jpg";

const ModalSignIn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span className="text-muted"onClick={handleShow}>
        Sign In
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-success p-4" closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex h-100 ">
            <div className="flex-grow-1">
              <img src={log} alt="" className="img-fluid h-100" />
            </div>
            <div className="flex-grow-1 ms-3">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="success">Log In</Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalSignIn;
