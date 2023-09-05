import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
      <>
          <nav> 
             <Link to="/">Home</Link>
             <Link to="../FeaturePage">Features</Link>
             <Link to="../GalleryPage">Gallery</Link>
             <Link to="../OrderPage">Order</Link>
             <Link to="../StaffPage">Staff</Link>
             <Link to="../VitaminPage">Vitamins</Link>
          </nav>
          </>
      );
}
export default Nav;