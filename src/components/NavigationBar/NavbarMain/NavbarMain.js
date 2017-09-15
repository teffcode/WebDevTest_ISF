import React from 'react';

import Logo from '../../Logo/Logo';
import MenuMain from '../MenuMain/MenuMain';
import items from '../../../data/itemsNavbar/itemsMenuMain';
import ButtonDayTrial from '../../Buttons/ButtonDayTrial/ButtonDayTrial';
import logo from '../../../images/logo.png';

import './NavbarMain.css';

const NavbarMain = () => (
    <div className="navbar__main">
        <img 
            src="https://www.cebroker.com/Content/images/logo-ceb-smallarrows-tablet.png" 
            alt="logo CE Broker"
            style={{height:"40px", alignItems:"flex-start"}}
        />
        <div className="navbar__main__end">
            <MenuMain items={items}/>
            <ButtonDayTrial/>
        </div>
    </div>
);

export default NavbarMain;