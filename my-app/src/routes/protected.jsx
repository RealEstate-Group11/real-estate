import { Children } from "react";
import { Navigate } from "react-router-dom";

const Proctected = ()=>{
    const token = localStorage.getItem("authorization");
    if(token === undefined) token="";
    return(
        <>
        {token.length?Children: <Navigate to="/"/>}
        </>
    )
}

export default Proctected;