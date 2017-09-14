import React from 'react';

import ButtonPrice from '../Buttons/ButtonPrice/ButtonPrice';

import './CoursesCards.css';

const CoursesCard = ({title, provider, description, price}) => {

    return (
        <div className="card">
            <div>
                <h3 className="card__title">
                    {title}
                </h3>
                <p className="card__provider">
                    {provider}
                </p>
                <p className="card__description">
                    {description}
                </p>
                <ButtonPrice price={price}/>
            </div>
        </div>
    );
}

export default CoursesCard;