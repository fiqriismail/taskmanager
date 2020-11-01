import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand" href="#">
        Task Manager APP
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <Link className="nav-link" to="/">
            <li className="nav-item">Tasks</li>
          </Link>
          <Link className="nav-link" to="/newtask">
            <li className="nav-item">New Task</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;
