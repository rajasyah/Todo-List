import React, { Component } from "react";
import Button from "./Button";
import "../styles/DeleteList.css";

export class DeleteList extends Component {
  render() {
    const { todos, del, deld, closed } = this.props;
    const delById = (id) => {
      del(id);
    };
    if (deld) {
      return (
        <div className="del-container">
          <div className="delete-box">
            <h3>Apakah Yakin ?</h3>
            <div className="button">
              <Button
                text="Ok"
                color="danger"
                action={() => delById(todos.id)}
              />
              <Button text="Cancel" color="primary" action={closed} />
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DeleteList;
