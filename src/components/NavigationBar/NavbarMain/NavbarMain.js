import React from 'react';

import Logo from '../../Logo/Logo';
import MenuMain from '../MenuMain/MenuMain';
import items from '../../../data/itemsNavbar/itemsMenuMain';
import ButtonDayTrial from '../../Buttons/ButtonDayTrial/ButtonDayTrial';

import './NavbarMain.css';

const NavbarMain = () => (
    <div className="navbar__main">
        <MenuMain items={items}/>
        <ButtonDayTrial/>
    </div>
);

export default NavbarMain;