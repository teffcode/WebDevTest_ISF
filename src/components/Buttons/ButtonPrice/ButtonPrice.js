import React from 'react';

import './ButtonPrice.css'

const ButtonPrice = ({price}) => (
    <button className="button__price">
        $ {price}.00
    </button>
);

export default ButtonPrice;