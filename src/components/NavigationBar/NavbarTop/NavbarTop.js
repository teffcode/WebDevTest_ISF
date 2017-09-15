import React from 'react';

import MenuTop from '../MenuTop/MenuTop';
import items from '../../../data/itemsNavbar/itemsMenuTop';
import './NavbarTop.css';

const NavbarTop = () => (
    <div className="navbar__top">
        <div className="navbar__top__end">  
            <MenuTop items={items}/>
        </div>
    </div>
);

export default NavbarTop;