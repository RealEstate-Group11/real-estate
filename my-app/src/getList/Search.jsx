import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch ,BsPlus} from "react-icons/bs";
import AddProperty from "../addProperty/main";
import "../propertyList/propertylist.css"
import PropertyList from "../propertyList/propertylist";



const SearchRes = ({property})=>{
  const [addinput, setAddInput] = useState();
  const [submitted,setSubmitted]=useState(false)
  const isEnabled = (addinput !== undefined)
  const issubmitted= isEnabled && submitted
  const handleInputChange = (e) => {
    setAddInput(e.target.value )
}

  const [updatedproperty, setProperty] = useState([...property]);

  const handleDown=()=>{
    setSubmitted(false)
  }
   

  const handleSearch = () => {
    fetch(`https://real-estate-backend-3jtv.onrender.com/search/${addinput}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    }).then(res =>
      res.json()).then(result =>{
        setSubmitted(true)
        setProperty(result)
      }).catch(err => console.log(err))
       
        
      
  }
 
    return(
        <>

<div className='seracharea'>
        
 <div class="searchbtn">
   <input type="text" placeholder="Search ppd id" className="isearch" name='id' id='id' onKeyDown={handleDown} onChange={(e) => { handleInputChange(e) }}/>
   <button type="submit" className="isearchbtn" disabled={!isEnabled} onClick={() => handleSearch()} >
   <BsSearch className="btncolor"/>   
   </button>
 </div>
        <Link to='/properties'><button type='sumbit' className='addbtn' onClick={AddProperty}> 
        <BsPlus /> Add Property
        </button></Link>
        </div>
        
        <div className="propertylstpart"> <PropertyList propertydetails= {issubmitted ?  updatedproperty : property} /></div>
        <div className="propertylstpart"> <PropertyList propertydetails= {updatedproperty} /></div>
        
        </>
    )
}
export default SearchRes