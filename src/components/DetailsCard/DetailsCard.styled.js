import styled, { css } from 'styled-components';

export const DetailsContainer = styled.div`
    position: relative;
`;    

export const MainDetailsSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const DetailsReviewSection = styled.div`
    display: flex;
    gap: 16px;
`;

export const DetailsPriceSection = styled.div`
    margin-top: 8px;
    margin-bottom: 24px;
`;

export const DetailsScrollContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 506px;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 8px;
        
    } 
    &::-webkit-scrollbar-thumb {
        background-color: #D9D9D9;
        border-radius: 7px;
    }

    &::-webkit-scrollbar-track {
        background: transparent; 
    } 
`;

export const DetailsGallerySection = styled.div`
    display: flex;
    gap: 16px;
    margin-bottom: 24px;
`;

export const DetailsGalleryImg = styled.img`
    width: 290px;
    border-radius: 10px;
`;

export const DetailsDescriptionSection = styled.div`
    margin-bottom: 44px;
`;

export const DetailsButtons = styled.div`
    display: flex;
    gap: 40px;

    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h2};
`;

const activeIndicatorStyles = css`
    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: #E44848;
    }
`;

export const FeaturesButton = styled.button`
    cursor: pointer;
    position: relative;
    ${({ active }) => active && activeIndicatorStyles}
`;

export const ReviewsButton = styled.button`
    cursor: pointer;
    position: relative;
    ${({ active }) => active && activeIndicatorStyles}
`;