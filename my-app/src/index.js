import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Header from './header/header';
// import SideNavBar from './asidebar/aside';
// import AddProperty from './addProperty/main';
// import Signup from './sign-up/sign-up';
// import Signin from './sign-in/signin';
import PropertyView from './getList/PropertyView';
// import RouteContent from './routes/content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    {/* <SideNavBar/> */}
  
    {/* <RouteContent/> */}
    {/* <Signup/> */}
    {/* <Signin/> */}
    <PropertyView/>
  </React.StrictMode>
);