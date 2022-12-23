import "./PropertyView.css"
// import PropertyList from "./propertylist/PropertyList";
import Header from "../header/header";
import SideNavBar from "../asidebar/aside";
import React, { useState, useEffect } from 'react';
import SearchRes from "./Search";
const url = 'https://real-estate-backend-3jtv.onrender.com'

const PropertyView = ()=>{
    const [property, setProperty] = useState([]);
    const token = localStorage.getItem("authorization");

  useEffect(() => {
    async function fetchData() {
      console.log(url)
      const response = await fetch(`${url}/properties`,{
        headers: {
            authorization: token
        }}); 
     
      const data = await response.json(); 
      console.log(data)
      setProperty(data);
      // console.log(data);
    }
    fetchData()
  }, [token])
   
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