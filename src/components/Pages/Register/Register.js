import React from "react";
import Header from "../../Layouts/Header";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <section style={{ backgroundColor: "rgb(5, 5, 87)" }}>
      <Header />
      <div className="container">
        <h1 style={{ color: "white" }} align="center">
          Get ready to kickstart your career
        </h1>
        <div
          style={{
            backgroundColor: "white",
            marginLeft: "15%",
            marginRight: "15%",
            marginTop: "5%",
            padding: "2%",
          }}
        >
          <h5 className="text-center">CREATE YOUR ACCOUNT</h5>
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default Register;
