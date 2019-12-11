import React from "react";
import { Link, navigate } from "gatsby";
import { getUser, isLoggedIn, logout } from "../services/auth";
import './nav-bar.css'
export default () => {
  // Show logged-in status of user.
  const content = { message: "", login: true };
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().username}`;
  } else {
    content.message = "You are not logged in";
  }

  return (
    <div className="content-navbar">
      <span>{content.message}</span>

      <nav>
        <Link  className="nav-link" to="/">Home</Link>
        {` `}
        <Link  className="nav-link" to="/profile">Profile</Link>
        {` `}
        {isLoggedIn() ? (
          <a className="nav-link" 
            href="/"
            onClick={event => {
              event.preventDefault();
              logout(() => navigate(`/`));
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </div>
  );
};
