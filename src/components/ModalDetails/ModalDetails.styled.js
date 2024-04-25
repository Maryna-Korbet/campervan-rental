import styled, { css } from 'styled-components';

export const DetailsButtonContainer = styled.div`
    display: flex;
    gap: 40px;

    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h2};

    border-bottom: 1px solid #10182833;
`;

const activeIndicatorStyles = css`
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 5px;
        background-color: ${p => p.theme.colors.accentColor};
    }
`;

export const DetailsButton = styled.button`
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-bottom: 24px;
    ${({ active }) => active && activeIndicatorStyles}
`;

