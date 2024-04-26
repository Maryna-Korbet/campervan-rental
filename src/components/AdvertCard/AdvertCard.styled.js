import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const AdvertCardContainer = styled.li`
    display: flex;
    padding: 24px;  
    border-radius: ${p => p.theme.radius.m};
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.border}`};
    background-color: ${p => p.theme.backgroundColor.main};
`;

export const AdvertCardItem = styled.div`
    display: flex;
    gap: 24px;
    width: calc(100% - 48px);
    box-sizing: border-box;
    width: 100%; 
`;

export const AdvertCardImg = styled.img`
    display: block;
    width: 290px;
    height: 310px;
    border-radius: ${p => p.theme.radius.s};
`;    

export const AdvertCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

export const AdvertMainInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const AdvertPriceSection = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 8px;
`;

export const AdvertPrice = styled.div`
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h1};
    color: ${p => p.theme.colors.main};
`;

export const AdvertMainSection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
`;

export const AdvertSecondSection = styled.div`
    display: flex;
    gap: 16px;
`;

export const AdvertReviewSection = styled.div`
    display: flex;
    gap: 4px;

    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.main};
`;

export const AdvertRatingInfo = styled.div`
    display: flex;
`;

export const AdvertLocationSection = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const AdvertLocation = styled.div`
    display: flex;
`;

export const AdvertCardDescription = styled.div`
    display: flex;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.main};
    color: ${p => p.theme.colors.text};
`;

export const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
        width: 24px;
        height: 24px;
`;

export const StyledFavoriteIcon = styled(FavoriteIcon)`
        width: 24px;
        height: 24px;
        color: ${p => p.theme.colors.accentColor};
`;

export const DescriptionDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 18px; 
    gap: 8px; 
    background-color: ${p => p.theme.backgroundColor.details};

    border-radius: ${p => p.theme.radius.xl};
    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.text};
`;

export const DetailsText = styled.span` 
    text-transform: capitalize;
`; 