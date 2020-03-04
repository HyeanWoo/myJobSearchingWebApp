import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props);
  return(
    <nav className="nav-wrapper brown lighten-2">
      <div className="container">
        <a className="brand-logo">My Job Searching Web App</a>
        <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/content">Content</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(Navbar);