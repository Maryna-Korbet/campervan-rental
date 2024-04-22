import React from 'react';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { addFavoriteAdvert, removeFavoriteAdvert } from '../../redux/favorites/favoritesSlices';
import StarIcon from '@mui/icons-material/Star';
import PlaceIcon from '@mui/icons-material/Place';
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
    AdvertDescriptionDetails,
    DescriptionDetails,
    Details,
    DetailsText,
    DetailsIcon,
    StyledFavoriteBorderIcon,
    StyledFavoriteIcon,
} from './AdvertCard.styled';
import { MainTitle, Button } from 'components/GlobalStyles';

const AdvertCard = ({ advert, isFavorite }) => {
    const {
        _id,
        name,
        price,
        rating,
        location,
        adults,
        engine,
        transmission,
        description,
        details: {
            airConditioner,
            kitchen,
            beds,
        },
        gallery,
        reviews,
    } = advert;

    const dispatch = useDispatch();
    const { isAuthenticated } = useAuth0();

    const [showMore, setShowMore] = useState(false);

    const handleFavoriteToggle = () => {
        if (!isAuthenticated) {
        alert('This option is available only for logged in users.');
        return;
        }

        if (isFavorite) {
        dispatch(removeFavoriteAdvert(_id));
        } else {
        dispatch(addFavoriteAdvert(_id));
        }
    };

    return (
        <AdvertCardContainer>
            <AdvertCardItem>
                <AdvertCardImg src={gallery[0]} alt={name} />
                    <AdvertCardInfo>
                        <AdvertMainInfo>
                            <AdvertMainSection>
                                <MainTitle>{name}</MainTitle>
                                <AdvertPriceSection>
                                <AdvertPrice>&#8364;{parseFloat(price).toFixed(2)}</AdvertPrice>

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
                                        <div>{rating}</div>
                                        <div>&#10098;{reviews.length} Reviews</div>
                                    </AdvertRatingInfo>
                                </AdvertReviewSection>
                                <AdvertLocationSection>
                                    <PlaceIcon />
                                    <AdvertLocation>{location}</AdvertLocation>
                                </AdvertLocationSection>
                            </AdvertSecondSection>
                    </AdvertMainInfo>
                    
                    <AdvertCardDescription>
                        {description}&#8230;
                    </AdvertCardDescription>


                        <AdvertDescriptionDetails>
                            <DescriptionDetails>
                                {adults &&
                                    <Details>
                                        <DetailsIcon className="icon">
                                            <use xlinkHref="/src/icons/sprite.svg#icon-beds"></use>
                                        </DetailsIcon>{adults} adults
                                    </Details>
                                }
                                {transmission &&
                                    <Details>
                                        <DetailsIcon>
                                            <use xlinkHref="/src/icons/sprite.svg#icon-beds"></use>
                                        </DetailsIcon>
                                        <DetailsText>{transmission}</DetailsText>
                                    </Details>
                                }
                                {engine &&
                                    <Details>
                                        <DetailsIcon>
                                            <use xlinkHref="/src/icons/sprite.svg#icon-beds"></use>
                                        </DetailsIcon><DetailsText>{engine}</DetailsText>
                                    </Details>
                                }
                                {kitchen &&
                                    <Details>
                                        <DetailsIcon>
                                            <use xlinkHref="/src/icons/sprite.svg#icon-beds"></use>
                                        </DetailsIcon>
                                        <DetailsText>kitchen</DetailsText>
                                    </Details>
                                }
                                {beds &&
                                    <Details>
                                        <DetailsIcon>
                                            <use xlinkHref="/src/icons/sprite.svg#icon-beds"></use>
                                        </DetailsIcon>{beds} beds
                                    </Details>
                                }
                                {airConditioner &&
                                    <Details>
                                        <DetailsIcon>
                                            <use xlinkHref="/src/icons/ac.svg"></use>
                                        </DetailsIcon>AC
                                    </Details>
                                }
                            </DescriptionDetails>
                    </AdvertDescriptionDetails>

                    {!showMore && (
                        <div>
                            <Button type="button" onClick={() => setShowMore(true)}>Show more</Button>
                        </div>
                    )}
                    
                    </AdvertCardInfo>
            </AdvertCardItem>
        </AdvertCardContainer>
    );
};

export default AdvertCard;