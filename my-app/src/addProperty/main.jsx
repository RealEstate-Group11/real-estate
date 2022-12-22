import Header from "../header/header";
import SideNavBar from "../asidebar/aside";
import Form from "./form";
import "../styles/form.css"

const AddProperty = () => {
    const row={
        display:"flex"
    }
    return (
        <>
             <div  className="maincontainer">
             <div className="headerpart">
       <Header />
       </div>

       <div  className="subpart" style={row}>
       <div  className="sidenav">
        <SideNavBar />
       <div className="propertylstpart"> <Form /></div>
       </div>
       
       </div>

       </div>
        </>
    )
}

export default AddProperty;