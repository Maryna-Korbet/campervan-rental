import styled from 'styled-components';

export const AdvertDescriptionContainer = styled.div`
    flex-wrap: wrap;
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

