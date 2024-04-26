import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { IconLocation } from 'components/Icons/Icons';
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
                        <StarIcon style={{ color: '#FFC531' }} />
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