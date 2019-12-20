import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
      <div className="Navgation">
    <Link to="/result">Result Page</Link>
    <Link to="/about">About Page</Link>
    </div>
  )
}

export default Nav;