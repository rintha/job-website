import React from "react";
import { Form, Row, Col } from "react-bootstrap";

const UploadingFile = () => {
  return (
    <div>
      <Row className="mb-3">
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom03">
          <p>Upload Your CV</p>
          <p>For better chance of being hired.</p>
          <Form.Control type="file" accept=".doc,.docx,.pdf" required />
          <Form.Control.Feedback type="invalid">
            Please upload a valid file (Doc, Docx or PDF).
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom06">
          <p>Upload Your Photo</p>
          <p>For better visibility, upload a profile picture</p>
          <Form.Control type="file" accept="image/*" required />
          <Form.Control.Feedback type="invalid">
            Please upload a valid image file.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
    </div>
  );
};

export default UploadingFile;
