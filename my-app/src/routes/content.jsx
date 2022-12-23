import {BrowserRouter,Routes,Route } from "react-router-dom";
import AddProperty from "../addProperty/main";
import Signin from "../sign-in/signin";
import Signup from "../sign-up/sign-up";
import Proctected from "./protected";



const RouteContent= ()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signin/>}/>
            {/* <Route path="/sign" element={<Signup/>}/> */}
        </Routes>

       <Route path="/properties" element={
         <Proctected>
            <AddProperty/>
        
         </Proctected>
       }></Route>
    
        </BrowserRouter>
        </>
    )
}


export default RouteContent;