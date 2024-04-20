import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectIsError } from '../redux/adverts/selectors';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import { getAllAdvartsOperation } from '../redux/adverts/operations';
import { LinearProgress } from '@mui/material';
import Button from '../components/Button/Button';
import { PageContainer } from '../components/GlobalStyles';


const HomePage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    useEffect(() => {
        dispatch(getAllAdvartsOperation()); 
    }, [dispatch]);

    return (
        <PageContainer>
            <h1 hidden>Home Page</h1>
            <div>{isLoading && !isError && <LinearProgress color='primary' sx={{ mt: 1 }} />}</div>
            <AdvertsList />
            <Button type="Load" />
        </PageContainer>
    );
};

export default HomePage;