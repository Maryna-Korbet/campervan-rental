import React from 'react';
import { SecondTitle } from '../GlobalStyles';
import {
    VehicleDetailsContainer,
    VehicleDetailsList,
    VehicleDetailsItem,
} from './VehicleDetails.styled';


const VehicleDetails = ({ advert }) => {
    return (    
        <VehicleDetailsContainer>
            <SecondTitle>Vehicle Details</SecondTitle>
            
            <VehicleDetailsList>
                <VehicleDetailsItem>
                    <div>Form</div>
                    <div><separatedLastLetter>{advert.form}</separatedLastLetter></div>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <div>Length</div>
                    <div>{advert.length}</div>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <div>Width</div>
                    <div>{advert.width}</div>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <div>Height</div>
                    <div>{advert.height}</div>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <div>Tank</div>
                    <div>{advert.tank}</div>
                </VehicleDetailsItem>
                <VehicleDetailsItem>
                    <div>Consumption</div>
                    <div>{advert.consumption}</div>
                </VehicleDetailsItem>
            </VehicleDetailsList>
        </VehicleDetailsContainer>
    );
}

export default VehicleDetails;