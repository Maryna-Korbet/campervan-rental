import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts,  selectNextPage, selectIsLoading } from '../../redux/adverts/selectors';
import { Button } from 'components/GlobalStyles';
import { LinearProgress } from '@mui/material';


function AdvertsList() {
    const dispatch = useDispatch();
    const data = useSelector(selectAdverts);
    const isLoading = useSelector(selectIsLoading);


    const handleLoadMore = () => {
        dispatch(selectNextPage()); 
    };
    
    return (
            <ul>
                {data.slice(0, 4).map(({ _id, name }) => (
                    <li key={_id}>
                        <p>{name}</p>
                        {isLoading
                            ? (<LinearProgress color='primary' sx={{ mt: 1 }} />)
                            : (
                                <Button onClick={handleLoadMore} disabled={isLoading}>
                                    Show more
                                </Button>
                            )}
                    </li>
                ))}
            </ul>
    );
}

export default AdvertsList;



