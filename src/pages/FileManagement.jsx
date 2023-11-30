import React, { useState, useEffect } from "react";
import useDatabase from "../hooks/useDatabase";
import AddDatabaseForm from "../components/UI/AddDatabaseForm";
import Button from "../components/UI/Button";
import useSearch from "../hooks/useSearch";
import SearchBox from "../components/UI/SearchBox";
import { deleteDatabase } from "../services/overlay/OverlayService";
import { AlertDialog } from "../components/UI/AlertDialog";
// import { getDatabase } from "../services/overlay/OverlayService";

export const FileManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlertDialog, setAlertDialog] = useState(false);
  const [filterData, setFilterData] = useState();

  const handlePostSuccess = () => {
    handleCloseModal();
    fetchDataAfterPostSuccess();
  };

  const [reloadData, setReloadData] = useState(false);
  const database = useDatabase(reloadData);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSearch = (search) => {
    const filterSearchData = useSearch(database, search);
    setFilterData(filterSearchData);
  };
  useEffect(() => {
    setFilterData(database);
  }, [database]);

  const fetchDataAfterPostSuccess = async () => {
    try {
      setReloadData((prevState) => !prevState);
    } catch (error) {
      console.error("Error fetching data after post:", error);
    }
  };

  const handleDelete = (id) => {
    setAlertDialog(true);
    // deleteDatabase(id);
    // fetchDataAfterPostSuccess();
  };
  const handleCloseAlert = () => setAlertDialog(false);
  const tableData = filterData?.map((data, index) => (
    <tr key={data.id}>
      <td>{index + 1}</td>
      <td>{data.datasetName}</td>
      <td>{data.datasetDetails}</td>
      <td>{data.date}</td>
      <td className="text-nowrap">
        <button type="button" className="btn btn-success me-2">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger me-2"
          onClick={() => handleDelete(data.id)}
        >
          Delete
        </button>
        {showAlertDialog && (
          <AlertDialog
            show={showAlertDialog}
            handleClose={handleCloseAlert}
            id={data.id}
          />
        )}
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
        <AddDatabaseForm
          show={showModal}
          handleClose={handleCloseModal}
          handlePostSuccess={handlePostSuccess}
        />
      </div>
      <h1 className="text-start">Database List</h1>
      <SearchBox onSearch={handleSearch} />
      <div className="table-wrapper flex-grow-1 w-100 overflow-auto">
        {filterData?.length === 0 ? (
          <div className="text-center text-primary">No records found</div>
        ) : (
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
        )}
      </div>
    </div>
  );
};
