import React from 'react';
import AdvertDescriptionDetails from '../AdvertDescriptionDetails/AdvertDescriptionDetails';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import FeaturesDescriptionDetails from '../FeaturesDescriptionDetails/FeaturesDescriptionDetails';
import { FeaturesDescriptContainer, FeaturesDescriptList } from '../Features/Features.styled';

export const Features = ({ setActiveButton, advert }) => {
    const handleButtonClick = () => {
        setActiveButton('features');
    };

    return( 
            <FeaturesDescriptContainer onClick={handleButtonClick}>
                <FeaturesDescriptList>
                    <AdvertDescriptionDetails advert={advert} order={2} />
                    <FeaturesDescriptionDetails advert={advert} />
                </FeaturesDescriptList>
                
                <VehicleDetails advert={advert}/>
            </FeaturesDescriptContainer>
    );
};