import React from 'react';
import { IconLocation } from '../Icons/Icons';
import RatingStar from '../RatingStar/RatingStar';
import ModalDetails  from '../ModalDetails/ModalDetails';
import { MainTitle } from 'components/GlobalStyles';
import {
    AdvertPrice,
    AdvertReviewSection,
    AdvertRatingInfo,
    AdvertLocationSection,
    AdvertLocation,
    AdvertCardDescription
} from '../AdvertCard/AdvertCard.styled';
import {
    DetailsContainer,
    MainDetailsSection,
    DetailsReviewSection,
    DetailsPriceSection,
    DetailsGallerySection,
    DetailsGalleryImg,
    DetailsScrollContent,
    DetailsDescriptionSection,
} from '../DetailsCard/DetailsCard.styled';


const DetailsCard = ({ advert }) => {
    const gallery = [...advert.gallery];
    
    return (
        <DetailsContainer>
            <MainDetailsSection>
                <MainTitle>{advert.name}</MainTitle>
                <DetailsReviewSection>
                    <AdvertReviewSection>
                        <RatingStar />
                        <AdvertRatingInfo>
                            <div>{advert.rating}</div>
                            <div>&#10098;{advert.reviews.length} Reviews&#10099;</div>
                        </AdvertRatingInfo>
                    </AdvertReviewSection>
                    <AdvertLocationSection>
                        <IconLocation />
                        <AdvertLocation>{advert.location}</AdvertLocation>
                    </AdvertLocationSection>
                </DetailsReviewSection>
                <DetailsPriceSection>
                    <AdvertPrice>&#8364;{parseFloat(advert.price).toFixed(2)}</AdvertPrice>
                </DetailsPriceSection>
            </MainDetailsSection>

            <DetailsScrollContent>
                <DetailsGallerySection>
                    {gallery.map((imageUrl) => (
                        <DetailsGalleryImg key={imageUrl} src={imageUrl} alt={advert.name} />
                    ))}
                </DetailsGallerySection>

                <DetailsDescriptionSection>
                    <AdvertCardDescription>{advert.description}</AdvertCardDescription>
                </DetailsDescriptionSection>

                <ModalDetails advert={advert} />
            </DetailsScrollContent>
        </DetailsContainer>
    );
};

export default DetailsCard;