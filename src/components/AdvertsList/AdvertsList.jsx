import { /* useDispatch, */ useSelector } from 'react-redux';
import { selectAdverts/* ,  selectNextPage, selectIsLoading */ } from '../../redux/adverts/selectors';
// import { Button } from 'components/GlobalStyles';
// import { LinearProgress } from '@mui/material';
import {
    AdvertCardContainer,
    AdvertCardList,
    AdvertCardItem,
    AdvertCardImg, 
    AdvertCardInfo,
    AdvertPriceSection,
    AdvertPrice,
    AdvertFavorite,
} from './AdvertsCard.styled';
import { MainTitle } from 'components/GlobalStyles';

function AdvertsList() {
   /*  const dispatch = useDispatch(); */
    const data = useSelector(selectAdverts);
  /*   const isLoading = useSelector(selectIsLoading);


    const handleLoadMore = () => {
        dispatch(selectNextPage()); 
    }; */
    
    return (
            <AdvertCardList>
            {data.slice(0, 4).map(({
                _id,
                name,
                price,
                rating,
                location,
                adults,
                children,
                engine,
                transmission,
                form,
                length,
                width,
                height,
                tank, 
                consumption,
                description,
                details,
                gallery,
                reviews }) => (
                <AdvertCardContainer key={_id}>
                    <AdvertCardItem>
                    <AdvertCardImg src={gallery[0]} alt={name} />
                        <AdvertCardInfo>   
                            <MainTitle>{name}</MainTitle>
                            <AdvertPriceSection>
                                <AdvertPrice>&#8364;{price}</AdvertPrice>
                                <AdvertFavorite>
                                    <use xlinkHref="../../icons/sprite.svg#icon-favorite-not-active"></use>
                                </AdvertFavorite> 
                            </AdvertPriceSection>
                        </AdvertCardInfo>   
                    </AdvertCardItem>  
                    
                </AdvertCardContainer>
                ))}
            </AdvertCardList>
    );
}

export default AdvertsList;



