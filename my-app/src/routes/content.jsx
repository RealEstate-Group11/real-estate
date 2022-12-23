import Signin from "../sign-in/signin";
import Signup from "../sign-up/sign-up";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PropertyView from "../get/PropertyView";
import AddProperty from "../addProperty/addProperty";
import Logout from "../logout/logout";
import Proctected from "./Protected";

const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
            <Route path="/" element={<Signin/>}></Route>
             <Route path="/signup" element={<Signup/>}></Route> 
             <Route  element={ <Proctected/>}>
             <Route path="/listproperty" element={<PropertyView/>}></Route>
            <Route path="/addproperty" element={<AddProperty/>}></Route>
             </Route>
            <Route path="/logout"  element={<Logout/>}></Route> 

          </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;