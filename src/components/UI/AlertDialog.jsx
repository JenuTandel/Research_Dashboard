import React from "react";
import { deleteDatabase } from "../../services/overlay/OverlayService";

export const AlertDialog = ({ show, handleClose, id, handlePostSuccess }) => {
  const handleDelete = async (id) => {
    await deleteDatabase(id);
    handlePostSuccess();
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
          <div className="modal-body p-4">
            <p className="text-start">Are you sure to delete this content?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleClose}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleDelete(id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
