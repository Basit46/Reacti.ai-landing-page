import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleHide = () => {
    setShow(false);
  };

  return (
    <nav>
      <h1 className="logo">REACT.AI</h1>

      <ul className={`navlinks ${show ? "show" : "hide"}`}>
        <FaTimes onClick={handleHide} />
        <li onClick={handleHide}>
          <a href="#About">Home</a>
        </li>
        <li onClick={handleHide}>
          <a href="#About">About</a>
        </li>
        <li onClick={handleHide}>
          <a href="#About">Features</a>
        </li>
        <li onClick={handleHide}>
          <a href="#About">Pricing</a>
        </li>
        <li onClick={handleHide}>
          <a href="#About">Blog</a>
        </li>
      </ul>

      <a className="external-link" href="https://reactai.com" target="blank">
        Get a demo
      </a>

      <FaBars onClick={handleShow} />
    </nav>
  );
};

export default Navbar;
