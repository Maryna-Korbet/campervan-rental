import styled from 'styled-components';


export const AppHeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index:10;
    right:0;
    left:0;
    align-items:center;
    padding: 18px 16px;
    margin-left:auto;
    margin-right:auto;
    background-color: ${p => p.theme.backgroundColor.button};

    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h2};

    @media (min-width: 768px) {
        padding:18px 32px;
    }
    @media (min-width: 1280px) {
        padding: 24px 100px;
    }
`

export const AppHeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    color: ${p => p.theme.colors.buttonText};
    text-transform: uppercase;

    &:before {
        content: '';
        position: absolute;
        top: -50%;
        left: 80px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 4px solid ${p => p.theme.colors.accent};
        border-top-color: transparent;
        animation: spin 5s linear infinite;
    }

    p {
        z-index: 1;
    }

    @media (min-width: 1280px) {
        gap: 16px;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const NavigationLinkContainer = styled.nav`
    all: unset;
    display: flex;
    gap: 20px;
    font-family: "Inter", sans-serif;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h2};

    @media (min-width: 1280px) {
        gap: 40px;
    }
`

export const NavigationItem = styled.div`  
    text-decoration: none;
    text-transform: uppercase;
    color: ${p => p.theme.colors.buttonText};
`

