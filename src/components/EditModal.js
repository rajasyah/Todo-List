import React, { Component } from "react";
import "../styles/EditModal.css";
import Button from "./Button";

export class EditModal extends Component {
  render() {
    const { edit, close, data, change, update } = this.props;
    if (edit) {
      return (
        <div className="modal-container">
          <div className="modal-box">
            <h3>Edit Task</h3>
            <div className="input">
              <input type="text" value={data.title} onChange={change} />
            </div>
            <div className="btn-group">
              <Button text="Update" color="succes" action={update} />
              <Button text="Cancel" color="danger" action={close} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default EditModal;
