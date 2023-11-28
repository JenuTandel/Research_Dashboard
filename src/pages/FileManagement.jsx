import React from "react";

export const FileManagement = () => {
  return (
    <div className="d-flex flex-column h-100 overflow-hidden w-100 p-3">
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-primary">
          Add New Database
        </button>
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

          <tbody className="tbody">
            <tr>
              <td>1</td>
              <td>ReinForce learning</td>
              <td>It includes the database of schools.</td>
              <td>23 Oct. 2023</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};
