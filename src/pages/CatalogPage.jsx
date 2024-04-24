// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectAdverts } from '../redux/adverts/advartsSelectors';
// import { selectIsLoading, selectIsError } from '../redux/adverts/advartsSelectors';
// import AdvertCard from '../components/AdvertCard/AdvertCard';
// import { AdvertsFilter } from '../components/AdvertsFilters/AdvertsFilters';
// import AdvertsList from '../components/AdvertsList/AdvertsList';
// import LinearProgress from '@mui/material/LinearProgress';
// import { PageContainer,  LoadMoreButton} from 'components/GlobalStyles';
// import { AdvertCardListContainer } from '../components/AdvertsList/AdvertsList.styled';

// const CatalogPage = () => {
//     const data = useSelector(selectAdverts);
//     const [filteredData, setFilteredData] = useState([]);
//     const isLoading = useSelector(selectIsLoading);
//     const isError = useSelector(selectIsError);
//     const [loadedCount, setLoadedCount] = useState(4);

//     const handleSearch = ({ filterText, selectedEquipment, selectedType, selectedTransmission }) => {
//         const newData = data.filter(advert => {
//             const text = advert.location.toLowerCase().includes(filterText.toLowerCase());
//             const equipment = selectedEquipment.length === 0 || selectedEquipment.every(equipment => advert.details[equipment]);
//             const type = !selectedType || advert.form === selectedType;
//             const transmission = !selectedTransmission || advert.transmission === selectedTransmission;
//             return text && equipment && type && transmission;
//         });
//         setFilteredData(newData);
//     };

//     const handleLoadMore = () => {
//         setLoadedCount(prevCount => prevCount + 4);
//     }

//     return (
//         <PageContainer>
//             <h1 hidden>Catalog Page</h1>
//             <div>{isLoading && !isError && <LinearProgress color='primary' sx={{ mt: 1 }} />}</div>

//             <AdvertsFilter onSearch={handleSearch} />

//             {filteredData.length === 0 ? (
//                 <AdvertsList loadedCount={loadedCount} />
//             ) : (
//                 <AdvertCardListContainer>
//                     {filteredData.slice(0, loadedCount).map(advert => (
//                         <AdvertCard
//                             key={advert._id}
//                             advert={advert}
//                         />
//                     ))}
//                 </AdvertCardListContainer>
//             )}

//             {!isLoading && !isError && filteredData.length > loadedCount && (
//                 <div>
//                     <LoadMoreButton type="button" onClick={handleLoadMore}>Load more</LoadMoreButton>
//                 </div>
//             )}
//         </PageContainer>
//     );
// };

// export default CatalogPage;

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAdverts } from '../redux/adverts/advartsSelectors';
import { selectIsLoading, selectIsError } from '../redux/adverts/advartsSelectors';
import AdvertCard from '../components/AdvertCard/AdvertCard';
import AdvertsList from '../components/AdvertsList/AdvertsList';
import { AdvertsFilter } from '../components/AdvertsFilters/AdvertsFilters';
import LinearProgress from '@mui/material/LinearProgress';
import { PageContainer, LoadMoreButton } from 'components/GlobalStyles';
import { AdvertCardListContainer } from '../components/AdvertsList/AdvertsList.styled';

const CatalogPage = () => {
    const data = useSelector(selectAdverts);
    const [filteredData, setFilteredData] = useState([]);
    const isLoading = useSelector(selectIsLoading);
    const isError = useSelector(selectIsError);
    const [loadedCount, setLoadedCount] = useState(4);

    const handleSearch = ({ filterText, selectedEquipment, selectedType, selectedTransmission }) => {
        const newData = data.filter(advert => {
            const text = advert.location.toLowerCase().includes(filterText.toLowerCase());
            const equipment = selectedEquipment.length === 0 || selectedEquipment.every(equipment => advert.details[equipment]);
            const type = !selectedType || advert.form === selectedType;
            const transmission = !selectedTransmission || advert.transmission === selectedTransmission;
            return text && equipment && type && transmission;
        });
        setFilteredData(newData);
    };

    const handleLoadMore = () => {
        setLoadedCount(prevCount => prevCount + 4);
    };

    return (
        <PageContainer>
            <h1 hidden>Catalog Page</h1>
            <div>{isLoading && !isError && <LinearProgress color='primary' sx={{ mt: 1 }} />}</div>

            <AdvertsFilter onSearch={handleSearch} />

            {filteredData.length === 0 ? (
                <AdvertsList loadedCount={loadedCount} />
            ) : (
                <AdvertCardListContainer>
                    {filteredData.slice(0, loadedCount).map(advert => (
                        <AdvertCard
                            key={advert._id}
                            advert={advert}
                        />
                    ))}
                </AdvertCardListContainer>
            )}

            {!isLoading && !isError && filteredData.length > loadedCount && (
                <div>
                    <LoadMoreButton type="button" onClick={handleLoadMore}>Load more</LoadMoreButton>
                </div>
            )}
        </PageContainer>
    );
};

export default CatalogPage;
