import React from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/advartsSelectors';
import { selectFavoriteAdverts } from '../../redux/favorites/favoritesSelectors';
import AdvertCard from '../AdvertCard/AdvertCard';
import { AdvertCardListContainer } from './AdvertsList.styled';


const AdvertsList = ({ loadedCount }) => {
    const data = useSelector(selectAdverts);
    const favoriteAdverts = useSelector(selectFavoriteAdverts);

    return (
        <AdvertCardListContainer>
            {data.slice(0, loadedCount).map(advert => (
                <AdvertCard
                    key={advert._id}
                    advert={advert}
                    isFavorite={favoriteAdverts.includes(advert._id)}
                />
            ))}
        </AdvertCardListContainer>
    );
};

export default AdvertsList;