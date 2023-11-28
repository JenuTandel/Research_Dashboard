import React, { useState } from "react";
import useDatabase from "../hooks/useDatabase";
import AddDatabaseForm from "../components/UI/AddDatabaseForm";
import Button from "../components/UI/Button";

export const FileManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const database = useDatabase();
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  console.log(database);
  const tableData = database?.map((data, index) => (
    <tr key={data.id}>
      <td>{index + 1}</td>
      <td>{data.databaseName}</td>
      <td>{data.databaseDetails}</td>
      <td>{data.date}</td>
      <td className="text-nowrap">
        <button type="button" className="btn btn-success me-2">
          Edit
        </button>
        <button type="button" className="btn btn-danger me-2">
          Delete
        </button>
        <button type="button" className="btn btn-info">
          Details
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="d-flex flex-column h-100 overflow-hidden w-100 p-3">
      <div className="d-flex justify-content-end">
        {/* <button type="button" className="btn btn-primary" onClick={handleShow}>
          Add New Database
        </button> */}
        <Button onClick={handleShowModal} />
        <AddDatabaseForm show={showModal} handleClose={handleCloseModal} />
      </div>
      <h1 className="text-start">Database List</h1>
      <div className="my-3">
        <input
          type="text"
          className="search form-control"
          placeholder="Search database"
          v-model="searchInput"
        />
      </div>
      <div className="table-wrapper flex-grow-1 w-100 overflow-auto">
        <table className="table table-striped">
          <thead className="bg-white position-sticky top-0">
            <tr>
              <th>Sr. No.</th>
              <th>Database Name</th>
              <th>Database Details</th>
              <th>Upload Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody className="tbody">{tableData}</tbody>
        </table>
      </div>
    </div>
  );
};
