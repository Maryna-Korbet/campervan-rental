import React from 'react';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
} from './AdvertCard.styled';
import Button from 'components/Button/Button';
import { MainTitle } from 'components/GlobalStyles';

const AdvertCard = ({ advert }) => {
    const {
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

    const [showMore, setShowMore] = useState(false);

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
                                    <FavoriteBorderIcon width={20} height={18} />
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
                        <Button type="Show more" onClick={() => setShowMore(true)} />
                    )}
                    
                    </AdvertCardInfo>
            </AdvertCardItem>
        </AdvertCardContainer> 
    );
};

export default AdvertCard;