import React from 'react';
import { IconAdults, IconAutomatic, IconPetrol, IconKitchen, IconBeds, IconAc } from '../components/Icons/Icons';
import {
    Details,
    DetailsText,
} from '../components/AdvertDescriptionDetails/AdvertDescriptionDetails.styled';

const internalComponentsOrder = {
    1: (advert) => [
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
        advert.details.kitchen && <Details key="kitchen">
            <IconKitchen />
            <DetailsText>kitchen</DetailsText>
        </Details>,
        advert.details.beds && <Details key="beds">
            <IconBeds />
            { advert.details.beds} beds
        </Details>,
        advert.details.airConditioner && <Details key="airConditioner">
            <IconAc />
            AC
        </Details>
    ],
    2: (advert) => [
        advert.adults && <Details key="adults">
            <IconAdults />
            {advert.adults} adults
        </Details>,
        advert.transmission && <Details key="transmission">
            <IconAutomatic />
            <DetailsText>{advert.transmission}</DetailsText>
        </Details>,
        advert.details.airConditioner && <Details key="airConditioner">
            <IconAc />
            AC
        </Details>,
        advert.engine && <Details key="engine">
            <IconPetrol />
            <DetailsText>{advert.engine}</DetailsText>
        </Details>,
        advert.details.kitchen && <Details key="kitchen">
            <IconKitchen />
            <DetailsText>kitchen</DetailsText>
        </Details>,
        advert.details.beds && <Details key="beds">
            <IconBeds />
            {advert.details.beds} beds
        </Details>
    ],
};

export default internalComponentsOrder;