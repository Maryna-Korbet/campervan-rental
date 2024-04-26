import React from 'react';
import { IconAdults, IconAutomatic, IconPetrol, IconKitchen, IconBeds, IconAc } from '../components/Icons/Icons';
import {
    Details,
    DetailsText,
} from '../components/AdvertDescriptionDetails/AdvertDescriptionDetails.styled';

const internalComponentsOrder = {
    1: (advert, details) => [
        advert.adults && <Details key="adults">
            <IconAdults />
            {advert.adults} adults
        </Details>,
        advert.transmission && <Details key="transmission">
            <IconAutomatic />
            <DetailsText>{advert.transmission}</DetailsText>
        </Details>,
        advert.engine && <Details key="engine">
            <IconPetrol />
            <DetailsText>{advert.engine}</DetailsText>
        </Details>,
        details.kitchen && <Details key="kitchen">
            <IconKitchen />
            <DetailsText>kitchen</DetailsText>
        </Details>,
        details.beds && <Details key="beds">
            <IconBeds />
            {details.beds} beds
        </Details>,
        details.airConditioner && <Details key="airConditioner">
            <IconAc />
            AC
        </Details>
    ],
    2: (advert, details) => [
        advert.adults && <Details key="adults">
            <IconAdults />
            {advert.adults} adults
        </Details>,
        advert.transmission && <Details key="transmission">
            <IconAutomatic />
            <DetailsText>{advert.transmission}</DetailsText>
        </Details>,
        details.airConditioner && <Details key="airConditioner">
            <IconAc />
            AC
        </Details>,
        advert.engine && <Details key="engine">
            <IconPetrol />
            <DetailsText>{advert.engine}</DetailsText>
        </Details>,
        details.kitchen && <Details key="kitchen">
            <IconKitchen />
            <DetailsText>kitchen</DetailsText>
        </Details>,
        details.beds && <Details key="beds">
            <IconBeds />
            {details.beds} beds
        </Details>
    ],
};

export default internalComponentsOrder;