import React, { useState } from "react";
import FormComponent from "../FormComponent/Index";
import { Container } from "./styles";

const MonkeyMail = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  return (
    <Container>
      {showSuccess ? (
        <>
          <h2>Thank you for your support!</h2>
        </>
      ) : (
        <>
          <h2>Subscribe to the M12 Studio newsletter</h2>
          <FormComponent handleSuccess={handleSuccess} />
        </>
      )}
    </Container>
  );
};

export default MonkeyMail;
