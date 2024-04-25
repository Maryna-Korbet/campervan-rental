import React, { useState } from 'react';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';
import {
    FeaturesButton,
    ReviewsButton,
    DetailsButtons,
} from './ModalDetails.styled';

const ModalDetails = ({ advert }) => {
    const [activeButton, setActiveButton] = useState('features');

    const handleButtonClick = buttonId => {
        setActiveButton(buttonId);
    };

    return (
        <div>
            <DetailsButtons>
                <FeaturesButton
                    type="button"
                    active={activeButton === 'features'}
                    onClick={() => handleButtonClick('features')}
                >
                Features
                </FeaturesButton>
                
                <ReviewsButton
                    type="button"
                    active={activeButton === 'reviews'}
                    onClick={() => handleButtonClick('reviews')}
                >
                Reviews
                </ReviewsButton>
            </DetailsButtons>

            <div>
                {activeButton === 'features' ? (
                <Features data={advert} />
                ) : (
                <Reviews reviews={advert.reviews} />
                )}
            </div>
        </div>
    );
};

export default ModalDetails;