import "./PropertyView.css"
// import PropertyList from "./propertylist/PropertyList";
import SideNavBar from "../asidebar/aside"
import Header from "../header/header";
import React, { useState, useEffect } from 'react';
import SearchRes from './Search';
const PropertyView = ()=>{

    const [property, setProperty] = useState([]);
    const authToken = localStorage.getItem("authorization");

  useEffect(() => {
    async function fetchData() {
      console.log(authToken)
      const response = await fetch("https://real-estate-backend-3jtv.onrender.com/properties/",{
        headers: {
            authorization: authToken
        }}); 
      // console.log(response)
      const data = await response.json(); 
      setProperty(data);
      // console.log(data);
    }
    fetchData()
  }, [authToken])
   
  //console.log(property)

    return(
        <>
       <div  className="maincontainer">
       <div  className="sidenav">
        <SideNavBar />
       </div>

       <div  className="subpart">
       <div className="headerpart">
       <Header />
       </div>

       <div className="searchpart"><SearchRes property={property} /></div> 
      
       </div>

       </div>
        </>
    )
}
export default PropertyView