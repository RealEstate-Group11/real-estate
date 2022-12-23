import Header from "../header/header";
import SideNavBar from "../asidebar/aside";
import Form from "./form";
import "../styles/form.css"

const AddProperty = () => {

    const subpart = {
        display: "flex",
        flexDirection:"row"
    }
   
    return (
        <>
             <div  className="maincontainer">
             <div className="headerpart">
       <Header />
       </div>

       <div  className={subpart}>
       <div  className="sidenav">
        <SideNavBar />
       <div > <Form /></div>
       </div>
       
       </div>

       </div>

       <div className="maincontainer">
       <Header/>

       </div>
        </>
    )
}

export default AddProperty;