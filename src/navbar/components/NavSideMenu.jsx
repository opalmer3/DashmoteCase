import './NavSideMenu.css';
import React from 'react';

function NavSideMenu({menuActive}){
    // Set max width when menu active to show menu with slide in transition
    return <div className="nav-side-menu" style={menuActive ? {maxWidth: "200px"} : {}}>
                
                <div className="side-links">
                    <a href="/">Example</a>
                    <a href="/">Example</a>
                    <a href="/">Example</a>
                </div>
                
           </div>
}

export default NavSideMenu;