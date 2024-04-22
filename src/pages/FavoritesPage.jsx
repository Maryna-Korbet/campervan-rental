import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteAdverts } from '../redux/favorites/favoritesSelectors';
import { selectAdverts } from '../redux/adverts/advartsSelectors';
import { selectIsLoading, selectIsError } from '../redux/adverts/advartsSelectors';
import AdvertCard from '../components/AdvertCard/AdvertCard';
import LinearProgress from '@mui/material/LinearProgress';
import { PageContainer, LoadMoreButton, MainTitle } from '../components/GlobalStyles';
import { AdvertCardListContainer } from '../components/AdvertsList/AdvertsList.styled';


const FavoritesPage = () => {
    const favoriteAdverts = useSelector(selectFavoriteAdverts);
    const allAdverts = useSelector(selectAdverts);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    const [loadedCount, setLoadedCount] = useState(4);

    const favoriteAdvertCards = allAdverts.filter(advert => favoriteAdverts.includes(advert._id));
    
    const handleLoadMore = () => {
        setLoadedCount(prevCount => prevCount + 4);
    }

    return (
        <PageContainer> 
            <h1 hidden>Favorite Adverts</h1>
            <div>{isLoading && !isError && <LinearProgress color='primary' sx={{ mt: 1 }} />}</div>


            {favoriteAdverts.length === 0 ? (
                <MainTitle>You haven't added any adverts to your favorites.</MainTitle>
            ) : (
                <AdvertCardListContainer>
                    {favoriteAdvertCards.map(advert => (
                        <AdvertCard
                            key={advert._id}
                            advert={advert}
                            isFavorite={true} 
                        />
                    ))}
                </AdvertCardListContainer>
            )}

            {!isLoading && !isError && favoriteAdverts.length > loadedCount && (
                <div>
                    <LoadMoreButton type="button" onClick={handleLoadMore}>Load more</LoadMoreButton>
                </div>
            )}
        </PageContainer>
    );
};

export default FavoritesPage;