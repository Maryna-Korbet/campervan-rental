import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectIsError } from '../redux/adverts/selectors';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import { getAllAdvartsOperation } from '../redux/adverts/operations';
import { LinearProgress } from '@mui/material';


const HomePage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);

    useEffect(() => {
        dispatch(getAllAdvartsOperation()); 
    }, [dispatch]);

    return (
        <div>
            <h1>Home Page</h1>
            <div>{isLoading && !isError && <LinearProgress color='primary' sx={{ mt: 1 }} />}</div>
            <AdvertsList />
        </div>
    );
};

export default HomePage;