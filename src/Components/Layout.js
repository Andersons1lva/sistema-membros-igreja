// Layout.js

import React from 'react';
import Sidebar from './Sidebar';
import MyNavbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <MyNavbar/>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
