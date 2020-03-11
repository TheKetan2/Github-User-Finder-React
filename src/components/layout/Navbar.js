import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-dark">
      <h1>
        <i className={icon} /> {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: "Github Profile Finder",
  icon: "fa fa-github"
};

Navbar.propType = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
