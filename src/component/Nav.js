import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul
        style={{
          listStyle: "none",
        }}
      >
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="tentang">
          <li>Tentang</li>
        </Link>

        <Link to="gallery">
          <li>Gallery</li>
        </Link>

        <Link to="contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
