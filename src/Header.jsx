import React from "react";
import logo from "./Images/logo.jpg";

const Header =()=>{
    return (
        <>
        <div className="header d-inline-flex bg-info">
            <img src={logo} className="m-2" alt="LOGO" width="70" height="50" />
            <h1 className="m-2" >Ganesh Notes</h1>
        </div>
        </>
    )
};

export default Header;