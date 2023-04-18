import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";

const Password = () => {
  const [password, setPassword] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (!hasStartedTyping) {
      setHasStartedTyping(true);
    }
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
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$"
        onChange={handlePasswordChange}
      />
      {hasStartedTyping && (
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
      )}
    </Form.Group>
  );
};

export default Password;
