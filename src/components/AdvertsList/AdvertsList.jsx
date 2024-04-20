import React from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../../redux/adverts/selectors';
import AdvertCard from '../AdvertCard/AdvertCard';
import {AdvertCardListContainer} from './AdvertsList.styled';


const AdvertsList = () => {
    const data = useSelector(selectAdverts);
    
    return (
        <AdvertCardListContainer>
            {data.slice(0, 4).map(advert => (
                <li key={advert._id}>
                    <AdvertCard advert={advert} />
                </li>
            ))}
        </AdvertCardListContainer>
    );
};

export default AdvertsList;