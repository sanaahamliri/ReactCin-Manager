import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [Mobile, setMobile] = useState(false);
  
  return (
    <header>
      <div className='container flexSB'>
        <nav className='flexSB'>
          <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <button className='toggle' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
