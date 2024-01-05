import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import backgroundImg from "../assets/images/back.jpg";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="row h-100 overflow-auto align-items-center">
      <div className="col-12 col-sm-6 gx-0">
        <div className="w-100 h-100 d-flex flex-column align-items-center">
          <h1 className="text-primary mb-4">Sign In</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form className="w-75 border border-1 rounded-2 p-4">
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
                  Sign in
                </button>
              </div>
              <div className="detail-text my-2">
                <p className="text-center">
                  Not Registered???{" "}
                  <Link to="/registration" className="text-danger">
                    Click here
                  </Link>{" "}
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="col-12 col-sm-6 gx-0 h-100 d-sm-block d-none">
        <img src={backgroundImg} className="h-100 w-100 object-fit-cover" />
      </div>
    </div>
  );
};

export default Login;
