import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

function TodoList({ todo, del, open, openDel }) {
  return (
    <div style={todoStyle}>
      <p> {todo.title} </p>
      <div style={{ display: "flex" }}>
        <Button
          text="Edit"
          color="succes"
          action={() => open(todo.id, todo.title)}
        />
        <Button text="Delete" color="danger" action={openDel} />
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoList;

const todoStyle = {
  background: "#2da4f8",
  color: "white",
  display: "flex",
  height: "3rem",
  alignItems: "center",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
