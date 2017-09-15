import React from 'react';

import ButtonPrice from '../Buttons/ButtonPrice/ButtonPrice';

import './FeaturedCoursesCards.css';

const FeaturedCoursesCards = ({imageCourse, title, provider, description, price}) => {

    return (
        <div className="container__featured__card">
            <div>
                <img src={imageCourse} alt={title} className="image__course"/>
            </div>
            <div className="featured__card">
                <div>
                    <h3 className="featured__card__title">
                        {title}
                    </h3>
                    <p className="featured__card__provider">
                        {provider}
                    </p>
                    <p className="featured__card__description">
                        {description}
                    </p>
                    <ButtonPrice price={price}/>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCoursesCards;