import React from 'react';

import NavbarMain from './NavbarMain/NavbarMain';
import NavbarTop from './NavbarTop/NavbarTop';

const NavigationBar = () => (
    <div style={{position: "fixed", zIndex:"3", width:"100%"}}>
        <NavbarTop/>
        <NavbarMain/>
    </div>
);

export default NavigationBar;