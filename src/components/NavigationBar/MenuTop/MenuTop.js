import React from 'react';

import './MenuTop.css'

const MenuTop = ({items}) => (
    <ul>
        {
            items.map(item => {
                return(
                <li className="menu__items">
                    <a>{item.title}</a>
                </li>
                )
            })
        }
    </ul>
);

export default MenuTop;