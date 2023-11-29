import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { postDatabase } from "../../services/overlay/OverlayService";
const AddDatabaseForm = ({ show, handleClose }) => {
  const today = new Date();
  const formattedToday = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  const initialValues = {
    datasetName: "",
    datasetDetails: "",
    date: formattedToday,
    csvFile: {},
  };

  const validationSchema = Yup.object().shape({
    datasetName: Yup.string().required("Email is required"),
    datasetDetails: Yup.string().required("Password is required"),
    csvFile: Yup.object().required("CSV file is required"),
    // .test(
    //   "fileType",
    //   "Only CSV files are allowed",
    //   (value) => value && value[0].type === "text/csv"
    // ),
  });
  //   const initialValues = {
  //     databaseName: "",
  //     databaseDetails: "",
  //     date: formattedToday, // Initialize date with today's date
  //     csvFile: "",
  //   };
  //   const validationSchema = Yup.object().shape({
  //     databaseName: Yup.string().required("Database Name is required"),
  //     databaseDetails: Yup.string().required("Detail is required"),
  //     csvFile: Yup.string().required("File is required"),
  //   });
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvContent = e.target.result;
      console.log(csvContent);
    };
    reader.readAsText(file);
  };
  // submit form values
  const handleSubmit = (values) => {
    console.log("In submit");
    console.log(values);
    // const data = {
    //   ...values,
    // };
    postDatabase(values);
  };
  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog d-flex align-items-center h-100">
        <div className="modal-content shadow">
          <div className="modal-header">
            <h5 className="modal-title">Add Dataset</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="w-100 border border-1 rounded-2 p-4">
                <div className="mb-4 ">
                  {/* <label htmlFor="email" className='m-2'>Email</label> */}
                  <Field
                    type="text"
                    id="datasetName"
                    name="datasetName"
                    className="form-control rounded-2 "
                    placeholder="Dataset Name "
                  />

                  <ErrorMessage
                    name="datasetName"
                    component="div"
                    className="error-message text-danger text-start"
                  />
                </div>
                <div className="mb-4">
                  {/* <label htmlFor="password" className='m-2'>Password</label> */}

                  <Field
                    type="text"
                    id="datasetDetails"
                    name="datasetDetails"
                    className="form-control rounded-2  "
                    placeholder="Dataset Details"
                  />
                  <ErrorMessage
                    name="datasetDetails"
                    component="div"
                    className="error-message text-danger text-start"
                  />
                </div>
                <div className="mb-4 ">
                  <Field
                    type="date"
                    className="form-control rounded-2"
                    id="date"
                    name="date"
                  />
                </div>
                <div className="mb-4 text-start">
                  <label name="csvfile" className="mb-2 fw-bold">
                    Upload dataset .csv file
                  </label>
                  <input
                    type="file"
                    id="csvFile"
                    name="csvFile"
                    accept=".csv"
                    onChange={handleFileUpload}
                  />
                  <ErrorMessage
                    name="csvFile"
                    component="div"
                    className="error-message text-danger text-start"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-primary rounded-2 border-0 text-white py-2 px-4"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDatabaseForm;
