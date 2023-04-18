import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const Joblocation = () => {
  const [hasSelectedOption, setHasSelectedOption] = useState(false);
  const handleOptionChange = (event) => {
    setHasSelectedOption(event.target.value !== "Preferred job location");
  };

  return (
    <Row className="mb-5">
      <Form.Group as={Col} lg="6" md="12" controlId="validationCustom03">
        <Form.Control type="text" placeholder="Key Skill" required />
      </Form.Group>
      <Form.Group as={Col} lg="6" md="12" controlId="validationCustom06">
        <Form.Select
          required
          type="text"
          placeholder="Preferred job location"
          onChange={handleOptionChange}
        >
          <option>Preferred job location</option>
          <option value="Kozhikode">Kozhikode</option>
          <option value="Kochi">Kochi</option>
          <option value="Banglore">Banglore</option>
          <option value="Chennai">Chennai</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
        </Form.Select>
        {hasSelectedOption && (
          <Form.Control.Feedback type="invalid">
            Please select a job location.
          </Form.Control.Feedback>
        )}
      </Form.Group>
    </Row>
  );
};

export default Joblocation;
