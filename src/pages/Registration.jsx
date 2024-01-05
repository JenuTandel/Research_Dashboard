import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import backgroundImg from "../assets/images/back1.jpg";
import { useNavigate } from "react-router-dom";
import { postUserData } from "../services/RegistrationService";

const Registration = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
    await postUserData(values);
    const username = generateUsername("jinal", "tandel");
    console.log(username);
    sendEmail("jinaltandel06@gmail.com", username, "username sent");
    navigate("/login");
  };

  const generateUsername = (firstname, lastname) => {
    const username = firstname + "." + lastname;
    return username;
  };

  const sendEmail = (email, subject, content) => {
    console.log(
      `Sending email to ${email} with Subject: ${subject} \n Content: ${content}`
    );
  };
  return (
    <div className="row h-100 overflow-auto align-items-center">
      <div className="col-12 col-sm-6 gx-0 d-sm-block d-none h-100">
        <img src={backgroundImg} className="h-100 w-100 object-fit-cover" />
      </div>
      <div className="col-12 col-sm-6 gx-0">
        <div className="w-100 h-100 d-flex flex-column align-items-center">
          <h1 className="text-primary mb-4">Sign Up</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="w-75 border border-1 rounded-2 p-4">
              <div className="mb-4 ">
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control rounded-2"
                  placeholder="Firstname"
                />

                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="error-message text-danger text-start"
                />
              </div>
              <div className="mb-4 ">
                {/* <label htmlFor="email" className='m-2'>Email</label> */}
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control rounded-2"
                  placeholder="Lastname"
                />

                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="error-message text-danger text-start"
                />
              </div>
              <div className="mb-4 ">
                {/* <label htmlFor="email" className='m-2'>Email</label> */}
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control rounded-2 "
                  placeholder="Email "
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message text-danger text-start"
                />
              </div>
              <div className="mb-4">
                {/* <label htmlFor="password" className='m-2'>Password</label> */}

                <Field
                  id="password"
                  name="password"
                  className="form-control rounded-2  "
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message text-danger text-start"
                />
              </div>
              <div className=" my-4">
                <button
                  type="submit"
                  className="bg-secondary rounded-2 w-50 border-0 text-white p-2"
                >
                  Submit
                </button>
              </div>
              <div className="detail-text my-2">
                <p className="text-center">
                  Already registered???{" "}
                  <Link to="/login" className="text-danger">
                    Click here
                  </Link>{" "}
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Registration;
