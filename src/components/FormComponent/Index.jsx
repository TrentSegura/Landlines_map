import React from "react";
import * as Yup from "yup";
import { Formik, Form, useField } from "formik";
import { Input, Error, Label, Submit, NameContainer } from "./styles";

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Label>
      <div className="lable">
        {label} {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </div>
      <Input {...field} {...props} />
    </Label>
  );
};

const FormComponent = ({ handleSuccess }) => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Must be a valid e-mail address")
      .required("Required"),
  });

  const handleSubmit = (data) => {
    handleSuccess();

    if (data) {
      fetch(`/api/memeberAdd?email=${data.email}`)
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      {({ errors, touched }) => (
        <Form>
          <NameContainer>
            <InputComponent
              name="firstName"
              type="text"
              label="First Name"
              placeholder="First Name"
              autoComplete="off"
              className="name"
            />
            <InputComponent
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              autoComplete="off"
              className="name"
            />
          </NameContainer>

          <InputComponent
            name="email"
            type="text"
            label="Email"
            placeholder="Email"
            autoComplete="off"
          />
          <Submit type="submit">Subscribe</Submit>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
