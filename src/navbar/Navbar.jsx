import './Navbar.css';
import React, { useState } from 'react';
import NavSideMenu from './components/NavSideMenu';

// Import user info from models. 
import users from '../models/users.js';
import UserImage from '../models/user-image-min.jpeg';

// Import icons from material-ui
import Icon from '@material-ui/core/Icon';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import NotificationsActive from '@material-ui/icons/NotificationsActive';


function Navbar(){
    const [menuActive, setMenuActive] = useState(false);

    // Toggles menuActive state between true and false to show/hide nav menu
    function toggleMenu(){
        setMenuActive(prevValue => !prevValue);
    }

    return <>
            <nav>
                <div className="hamburger-menu" onClick={toggleMenu}>
                    {menuActive ? <Close /> : <Menu />}
                </div>
                
                <div className="user-info">
                    <NotificationsActive />

                    <span className="user-full-name">{`${users[0].firstName} ${users[0].lastName}`}</span>

                    <img className="user-image" src={UserImage} alt="User"></img>
                </div>
            </nav>

            {/*  Set body position to relative to ensure correct positioning of side menu */}
           <NavSideMenu menuActive={menuActive} />
          </>

}

export default Navbar;