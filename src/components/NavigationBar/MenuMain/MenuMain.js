import React from 'react';

import './MenuMain.css';

const MenuMain = ({items}) => (
    <ul className="ul__menu__main">
        {
            items.map(item => {
                console.log(item.title)
                return(
                <li className="menu__main__items">
                    <a>{item.title}</a>
                </li>
                )
            })
        }
    </ul>
);

export default MenuMain;