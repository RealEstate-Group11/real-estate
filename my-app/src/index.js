import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Header from './header/header';
// import SideNavBar from './asidebar/aside';
import AddProperty from './addProperty/main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header />
    <SideNavBar/> */}
    <AddProperty/>
  </React.StrictMode>
);