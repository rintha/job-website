import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

const Password = () => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const containsLowerCase = /[a-z]/.test(password);
  const containsUpperCase = /[A-Z]/.test(password);
  const containsNumber = /\d/.test(password);
  const hasLength = password.length >= 6;

  return (
      <Form.Group as={Col} lg="6" md="12" controlId="validationCustom06">
        <Form.Control
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          isInvalid={
          
            (containsLowerCase )
          }
        />
        {/* <Form.Control.Feedback type="invalid">
          {password && !containsLowerCase && (
            <span style={{ color: "red" }}>One lowercase Character </span>
          )}
          {password && !containsUpperCase && (
            <span style={{ color: "red" }}>One uppercase Character</span>
          )}
          {password && !containsNumber && (
            <span style={{ color: "red" }}>One number</span>
          )}
          {password && !hasLength && (
            <span style={{ color: "red" }}>Minimum six Character</span>
          )}
        </Form.Control.Feedback> */}
        <Form.Text className="text-muted d-flex justify-content-between">
          <div>
            <div style={{ color: containsLowerCase ? "green" : "red" }}>
              <span>One lowercase Character</span>
            </div>
            <div style={{ color: containsUpperCase ? "green" : "red" }}>
              <span>One uppercase Character</span>
            </div>
          </div>
          <div>
            <div style={{ color: containsNumber ? "green" : "red" }}>
              <span>One number</span>
            </div>
            <div style={{ color: hasLength ? "green" : "red" }}>
              <span>Minimum six Character</span>
            </div>
          </div>
        </Form.Text>
      </Form.Group>
  );
};

export default Password;
