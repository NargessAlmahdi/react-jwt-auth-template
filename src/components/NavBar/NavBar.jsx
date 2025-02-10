// src/components/NavBar/NavBar.jsx

import { Link } from 'react-router';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/sign-up'>Sign Up</Link></li>
        <li><Link to='/Landing'>Home</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;