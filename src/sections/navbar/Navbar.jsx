import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav>
      <h1 className="logo">REACT.AI</h1>

      <ul className={`navlinks ${show ? "show" : "hide"}`}>
        <li>
          <a href="#About">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#About">Features</a>
        </li>
        <li>
          <a href="#About">Pricing</a>
        </li>
        <li>
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
