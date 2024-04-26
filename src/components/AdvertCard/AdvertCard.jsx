import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { addFavoriteAdvert, removeFavoriteAdvert } from '../../redux/favorites/favoritesSlices';
import StarIcon from '@mui/icons-material/Star';
import {
    AdvertCardContainer,
    AdvertCardItem,
    AdvertCardImg,
    AdvertCardInfo,
    AdvertMainInfo,
    AdvertMainSection,
    AdvertPriceSection,
    AdvertPrice,
    AdvertSecondSection,
    AdvertReviewSection,
    AdvertRatingInfo,
    AdvertLocationSection,
    AdvertLocation,
    AdvertCardDescription,
    StyledFavoriteBorderIcon,
    StyledFavoriteIcon
} from '../AdvertCard/AdvertCard.styled';
import { MainTitle, Button } from 'components/GlobalStyles';
import { IconLocation } from '../Icons/Icons';
import Modal from '../Modal/Modal';
import DetailsCard from '../DetailsCard/DetailsCard';
import AdvertDescriptionDetails from '../AdvertDescriptionDetails/AdvertDescriptionDetails';


const AdvertCard = ({ advert, isFavorite }) => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth0();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            dispatch(removeFavoriteAdvert(advert._id));
        } else {
            dispatch(addFavoriteAdvert(advert._id));
        }
    };

    const openModal = () => {
        document.body.style.overflow = 'hidden';
        setIsModalOpen(true);
    };

    const closeModal = () => {
        document.body.style.overflow = 'auto';
        setIsModalOpen(false);
    }

    return (
        <AdvertCardContainer>
            <AdvertCardItem>
                <AdvertCardImg src={advert.gallery[0]} alt={advert.name} />
                    <AdvertCardInfo>
                        <AdvertMainInfo>
                            <AdvertMainSection>
                                <MainTitle>{advert.name}</MainTitle>
                                <AdvertPriceSection>
                                <AdvertPrice>&#8364;{parseFloat(advert.price).toFixed(2)}</AdvertPrice>

                                {isAuthenticated && (
                                    <button type="button" onClick={handleFavoriteToggle}>
                                        {isFavorite ? <StyledFavoriteIcon /> : <StyledFavoriteBorderIcon />}
                                    </button>
                                )}

                                </AdvertPriceSection>
                            </AdvertMainSection>
                            <AdvertSecondSection>
                                <AdvertReviewSection>
                                    <StarIcon style={{ color: '#FFC531' }} />
                                    <AdvertRatingInfo>
                                        <div>{advert.rating}</div>
                                        <div>&#10098;{advert.reviews.length} Reviews</div>
                                    </AdvertRatingInfo>
                                </AdvertReviewSection>
                                <AdvertLocationSection>
                                    <IconLocation />
                                    <AdvertLocation>{advert.location}</AdvertLocation>
                                </AdvertLocationSection>
                            </AdvertSecondSection>
                    </AdvertMainInfo>
                    
                    <AdvertCardDescription>
                        {advert.description}&#8230;
                    </AdvertCardDescription>

                    <AdvertDescriptionDetails advert={advert} order={1}/>

                    <div>
                        <Button type="button" onClick={openModal}>Show more</Button>
                    </div>
                    
                    {isModalOpen && (
                        <Modal isCloseModal={closeModal}>
                            <DetailsCard advert={advert} />
                        </Modal>
                    )}

                </AdvertCardInfo>
            </AdvertCardItem>
        </AdvertCardContainer>
    );
};

export default AdvertCard;