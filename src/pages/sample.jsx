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
    databaseName: "",
    databaseDetails: "",
    date: formattedToday, // Initialize date with today's date
    csvFile: "",
  };
  const validationSchema = Yup.object().shape({
    databaseName: Yup.string().required("Database Name is required"),
    databaseDetails: Yup.string().required("Detail is required"),
    csvFile: Yup.string().required("File is required"),
  });
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvContent = e.target.result;
      //   console.log(csvContent);
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
    // postDatabase(values);
  };
  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Database</h5>
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
                  <Field
                    type="text"
                    id="databaseName"
                    name="databaseName"
                    className="form-control rounded-2"
                    placeholder="Database name"
                  />

                  <ErrorMessage
                    name="databaseName"
                    component="div"
                    className="error-message text-danger text-start"
                  />
                </div>
                <div className="mb-4 ">
                  <Field
                    type="text"
                    id="databaseDetails"
                    name="databaseDetails"
                    className="form-control rounded-2"
                    placeholder="Database details"
                  />

                  <ErrorMessage
                    name="databaseDetails"
                    component="div"
                    className="error-message text-danger text-start"
                  />
                </div>
                {/* <div className="mb-4 ">
                  <Field
                    type="date"
                    className="form-control rounded-2"
                    id="date"
                    name="date"
                  />
                </div> */}
                {/* <div className="mb-4 ">
                  <Field
                    type="file"
                    id="csvFile"
                    name="csvFile"
                    accept=".csv"
                    onChange={handleFileUpload}
                  />
                </div> */}
                <div className="modal-footer">
                  {/* <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={handleClose}
                  >
                    Close
                  </button> */}
                  <button
                    type="submit"
                    className="bg-secondary rounded-2 w-50 border-0 text-white p-2"
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
