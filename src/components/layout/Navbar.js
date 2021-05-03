import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = ({ icon, title }) => {
  // Destructuring props object and getting icon and title
  // UI

  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i>&nbsp; {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
// Default Props if we did not send props properly
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};
// Props Types is used to check type of props is matched and also if required is passes as true, then it will show warning as it is required
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
