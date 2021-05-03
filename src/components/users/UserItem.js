import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  // Destructuring props and props has user object and again destructuring user object to get data - Refer Above in paramters of UserItem Function

  // UI
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="People_Img"
        className="round-img"
        style={{ width: "60px" }}
      ></img>
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

// propTypes is used in order to check if props we are sending are matched required format and whether it is required or not.
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
