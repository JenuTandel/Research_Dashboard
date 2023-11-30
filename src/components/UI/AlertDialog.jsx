import React from "react";
import { deleteDatabase } from "../../services/overlay/OverlayService";

export const AlertDialog = ({ show, handleClose, id }) => {
  const handleDelete = (id) => {
    deleteDatabase(id);
  };
  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete(id)}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
