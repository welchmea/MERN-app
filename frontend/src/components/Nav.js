import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <>
          <nav> 
             <Link to="/">Home</Link>
             <Link to="../feature-page">Features</Link>
             <Link to="../gallery-page">Gallery</Link>
             <Link to="../order-page">Order</Link>
             <Link to="../staff-page">Staff</Link>
             <Link to="../vitamin-page">Vitamins</Link>
          </nav>
          </>
      );
}
export default Nav;