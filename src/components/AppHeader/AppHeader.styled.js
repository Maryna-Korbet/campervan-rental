import styled from 'styled-components';

export const AppHeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index:10;
    right:0;
    left:0;
    align-items:center;
    padding: 24px 100px;
    margin-left:auto;
    margin-right:auto;
    background-color: ${p => p.theme.backgroundColor.button};

    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h2};
`;

export const AppHeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    color: ${p => p.theme.colors.buttonText};
    text-transform: uppercase;
`;

export const NavigationLinkContainer = styled.nav`
    all: unset;
    display: flex;
    gap: 40px;
    font-family: "Inter", sans-serif;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h2};
`;

export const NavigationItem = styled.div`  
    text-decoration: none;
    text-transform: uppercase;
    color: ${p => p.theme.colors.buttonText};
`;

