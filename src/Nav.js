
import React, { useEffect, useState } from 'react'
import './Nav.css';
function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(()=> {
        window.addEventListener("scroll",()=> {
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.addEventListener("scroll")
        };
        
    },[])
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img 
              className="nav__logo"
              src="./assets/images/logo.png"
              alt="Tuniflix logo"/>

            <img 
              className="nav__avatar"
              src="./assets/images/avatar_profile.png"
              alt="profile avatar"/> 


        </div>

    )



}

export default Nav;