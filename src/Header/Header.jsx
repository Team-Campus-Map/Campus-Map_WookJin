import React from "react";
import { Link } from "react-router-dom";
import '../CSS/header.css'
const Header = () => {
  return (
    <>
      <Link to="/" className="headerlink">
        <div className="title">Campus Map</div>
      </Link>
    </>
  );
};

export default Header;
