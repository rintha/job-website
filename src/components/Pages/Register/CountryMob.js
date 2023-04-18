import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

const CountryMob = () => {
  const [country, setCountry] = useState("Country");
  const [mobile, setMobile] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    setMobile("");
  };

  const handleMobileChange = (event) => {
    const mobileNumber = event.target.value;
    const isIndia = country === "india";
    setMobile(mobileNumber);
    if (isIndia) {
      const formattedMobile =
        mobileNumber.length === 10 ? "+91 " + mobileNumber : "";
      event.target.setCustomValidity(
        mobileNumber.length === 10 ? "" : "Invalid mobile number"
      );
      event.target.value = formattedMobile;
    } else {
      event.target.setCustomValidity("Please select India as your country");
    }
  };

  return (
    <>
      <Row className="mb-5">
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom03">
          <Form.Select value={country} onChange={handleCountryChange} required>
            <option value="">Country</option>
            <option value="india">India</option>
          </Form.Select>
          {country !== "india" && mobile === "" && (
            <Form.Control.Feedback type="invalid">
              Please select India as your country.
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} lg="6" md="12" controlId="validationCustom06">
          <Form.Control
            required
            type="tel"
            placeholder="Mobile"
            pattern="[0-9]{10}"
            onChange={handleMobileChange}
            value={mobile}
          />
          {country === "india" && (
            <Form.Control.Feedback type="invalid">
              {mobile.length === 10
                ? ""
                : "Please enter a valid 10 digit mobile number."}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </Row>
    </>
  );
};

export default CountryMob;
