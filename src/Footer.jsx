import React from "react";


const Footer=()=>{
    const currYr=new Date().getFullYear();
    return(
        <>
        <footer className="footer fixed-bottom text-center bg-primary">
            <p>copyright Ⓒ {currYr} </p>
        </footer>
        </>
    );
};

export default Footer;