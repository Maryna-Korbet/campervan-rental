import styled, { css } from 'styled-components';

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
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: ${p => p.theme.colors.accentColor};
    }
`;

export const FeaturesButton = styled.button`
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-bottom: 24px;
    ${({ active }) => active && activeIndicatorStyles}
`;

export const ReviewsButton = styled.button`
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-bottom: 24px;
    ${({ active }) => active && activeIndicatorStyles}
`;


