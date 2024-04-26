import React from 'react';
import AdvertDescriptionDetails from '../AdvertDescriptionDetails/AdvertDescriptionDetails';
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import FeaturesDescriptionDetails from '../FeaturesDescriptionDetails/FeaturesDescriptionDetails';
import BookingForm from '../BookingForm/BookingForm';
import {
    FeaturesDescriptContainer,
    FeaturesDescriptContent,
    FeaturesDescriptList,
} from '../Features/Features.styled';

export const Features = ({ setActiveButton, advert }) => {
    const handleButtonClick = () => {
        setActiveButton('features');
    };

    return( 
        <FeaturesDescriptContainer onClick={handleButtonClick}>
            <FeaturesDescriptContent>
                <div>
                    <FeaturesDescriptList>
                        <AdvertDescriptionDetails advert={advert} order={2} />
                        <FeaturesDescriptionDetails advert={advert} />
                    </FeaturesDescriptList>                    
                    <VehicleDetails advert={advert} />
                </div>            
                <BookingForm />                
            </FeaturesDescriptContent>
        </FeaturesDescriptContainer>
    );
};