import React, { useState } from 'react';
import { Features } from '../Features/Features';
import { Reviews } from '../Reviews/Reviews';
import {
    DetailsButtonContainer,
    DetailsButton,
} from './ModalDetails.styled';

const ModalDetails = ({ advert }) => {
    const [activeButton, setActiveButton] = useState('features');

    const handleButtonClick = buttonId => {
        setActiveButton(buttonId);
    };

    return (
        <div>
            <DetailsButtonContainer>
                <DetailsButton
                    type="button"
                    active={activeButton === 'features'}
                    onClick={() => handleButtonClick('features')}
                >
                Features
                </DetailsButton>
                
                <DetailsButton
                    type="button"
                    active={activeButton === 'reviews'}
                    onClick={() => handleButtonClick('reviews')}
                >
                Reviews
                </DetailsButton>
            </DetailsButtonContainer>

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