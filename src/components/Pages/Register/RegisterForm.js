import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import UploadingFile from "./UploadingFile";
import Password from "./Password";
import CountryMob from "./CountryMob";
import Joblocation from "./Joblocation";

const RegisterForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // Check validity of all form controls
    let allFieldsValid = true;
    for (let i = 0; i < form.elements.length; i++) {
      const control = form.elements[i];
      if (
        control.tagName.toLowerCase() === "input" &&
        !control.validity.valid
      ) {
        allFieldsValid = false;
        break;
      }
    }

    if (allFieldsValid) {
      alert("Registered successfully!");
    } else {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      alert("Entered Details are not valid!");
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-5">
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom01">
          <Form.Control required type="text" placeholder="First name" />
        </Form.Group>
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom02">
          <Form.Control required type="text" placeholder="Last name" />
        </Form.Group>
      </Row>
      <CountryMob />
      <Row className="mb-5">
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom03">
          <Form.Control
            type="email"
            placeholder="Email IsYour Usename"
            required
          />
          <Form.Control.Feedback>
            We will email a confirmation to you
          </Form.Control.Feedback>
        </Form.Group>
        <Password />
      </Row>

      <Row className="mb-5">
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom03">
          <Form.Control type="date" placeholder="Date Of Birth" required />
        </Form.Group>
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom06">
          <Form.Control required type="number" placeholder="Experience" />
        </Form.Group>
      </Row>
      <Joblocation/>
      <UploadingFile />
      <Form.Group className="mb-5 justify-content-center">
        <Form.Check
          required
          label={
            <div className="d-flex align-items-center">
              <span style={{ fontSize: "14px" }}>
                I agree to the <a href="www.ggg">terms and conditions</a>
              </span>
              <div className="flex-grow-1 text-center">
                <Form.Check.Label className="ms-5 mb-0"> </Form.Check.Label>
              </div>
            </div>
          }
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <div className="text-end">
        <Button variant="success" type="submit">
          Register
        </Button>
      </div>
    </Form>
  );
};

export default RegisterForm;
