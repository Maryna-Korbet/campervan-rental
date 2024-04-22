import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectIsError, selectAdverts } from '../redux/adverts/advartsSelectors';
import { getAllAdvartsOperation } from '../redux/adverts/advartsOperations';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import { LinearProgress } from '@mui/material';
import { PageContainer, LoadMoreButton } from '../components/GlobalStyles';


const HomePage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    const adverts = useSelector(selectAdverts);
    const [loadedCount, setLoadedCount] = useState(4);

    useEffect(() => {
        dispatch(getAllAdvartsOperation()); 
    }, [dispatch]);

    const handleLoadMore = () => {
        setLoadedCount(prevCount => prevCount + 4);
    };

    return (
        <PageContainer>
            <h1 hidden>Home Page</h1>
            <div>{isLoading && !isError && <LinearProgress color='primary' sx={{ mt: 1 }} />}</div>
            
            <AdvertsList loadedCount={loadedCount} />

            {!isLoading && !isError && adverts.length > loadedCount &&
                (<div><LoadMoreButton type="button" onClick={handleLoadMore}>Load more</LoadMoreButton></div>)
                
            }
            
        </PageContainer>
    );
};

export default HomePage;