import React from 'react';
import {
    AdvertDescriptionContainer,
    DescriptionDetails,
} from '../AdvertDescriptionDetails/AdvertDescriptionDetails.styled';
import internalComponentsOrder from '../../helpers/internalComponentsOrder';

const AdvertDescriptionDetails = ({ advert, order}) => {
    return (
        <AdvertDescriptionContainer>
            <DescriptionDetails>
                {internalComponentsOrder[order](advert)}
            </DescriptionDetails>
        </AdvertDescriptionContainer>
    );
}

export default AdvertDescriptionDetails;

