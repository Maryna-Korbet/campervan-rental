import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: '#FFFFFF';    
    }

    #root {
        height: 100vh;
    }
`;

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 140px 16px;

    @media (min-width: 768px) {
        padding: 190px 32px;
    }
    @media (min-width: 1280px) {
        padding: 230px 64px;
    }
`;


export const MainTitle = styled.h1`
    text-align: left;
    font-size: ${p => p.theme.fontSizes.l};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h1};

    color: ${p => p.theme.colors.main};
`;

export const SecondTitle = styled.h2`
    text-align: left;
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h2};

    color: ${p => p.theme.colors.main};
`;

export const Button = styled.button`
    padding: 16px 40px;
    border-radius: ${p => p.theme.radius.l};
    font-family: "Inter", sans-serif;
    background-color: ${p => p.theme.backgroundColor.button};
    font-family: ${p => p.theme.fonts.main};
    color: ${p => p.theme.colors.buttonText};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.main};
    letter-spacing: -0.5%;

    &:hover {
        background-color: ${p => p.theme.backgroundColor.buttonActive};
    }
`;

export const LoadMoreButton = styled.button`
    font-family: "Inter", sans-serif;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.main};
    letter-spacing: ${p => p.theme.letterSpacing.button};
    color: ${p => p.theme.colors.main};
    margin-top: 50px;
    width: 166px;
    height: 56px;


    padding: 16px, 32px, 16px, 32px;
    border-radius: ${p => p.theme.radius.l};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.borderButton};

    &:hover {
        border-color: ${p => p.theme.backgroundColor.button};
    }
`;

export const ClassicButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    padding: 8px 30px;

    gap: 10px;
    border-radius: ${p => p.theme.radius.l};
    opacity: ${p => p.theme.opacity.none};

    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.sx};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.button};
    letter-spacing: ${p => p.theme.letterSpacing.button};
    text-align: left;

    background-color: ${p => p.theme.backgroundColor.button};
    color: ${p => p.theme.colors.buttonText};

    transition: ${p => p.theme.transition.cubicBezier};
    transform: ${p => p.theme.transform.scaleSecond};
    cursor: pointer;

    &:hover {
        background-color: ${p => p.theme.backgroundColor.buttonActive};
    }

    @media only screen and (max-width: 768px) {
        padding: 10px 40px;
        font-size: ${p => p.theme.fontSizes.s};
    }

    @media (min-width: 768px) {
        padding: 16px 60px;
    }
`;

export const ShowMoreButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${p => p.theme.fonts.main};
    padding: ${p => p.theme.padding.m};
    border-radius: ${p => p.theme.radius.l};
    background-color: ${p => p.theme.backgroundColor.button};
    width: 166px;
    height: 56px;
        &:hover, &:focus, &:active {
            background-color: ${p => p.theme.backgroundColor.buttonActive};
        }
`;

export const ContentImage = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
`;

export const Address = styled.address`
    font-style: normal;
`;

export const ClassicFormStyle = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: Hug (448px)px;
    height: Hug (532px)px;
    margin: 0 auto;
    padding: 24px 24px;
    border: ${p => `${p.theme.borders.normal} ${p.theme.colors.border}`};
    border-radius: ${p => p.theme.radius.s};
    opacity: ${p => p.theme.opacity.none};
    gap: 24px;
`;

export const ClassicHeaderForm = styled.h3`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    line-height: ${p => p.theme.lineHeights.h3};
    text-align: left;

    color: ${p => p.theme.colors.main};
    margin-bottom: 8px;
`;

export const ClassicTextForm = styled.p`
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.main};
    text-align: left;

    color: ${p => p.theme.colors.text};
    margin-bottom: 8px;
`;

export const ClassicInputForm = styled.input`
    display: block;
    width: Hug (400px)px;
    padding: 18px 18px;
    gap: 10px;
    border-radius: ${p => p.theme.radius.s};
    opacity: ${p => p.theme.opacity.none};
    background-color: ${p => p.theme.colors.input};
    outline: none;

    margin-bottom: 24px;
`;

export const ClassicTextareaForm = styled.textarea`
    display: block;
    width: Hug (400px)px;
    height: Hug (114px)px;
    padding: 18px 18px;
    border-radius: ${p => p.theme.radius.s};
    opacity: ${p => p.theme.opacity.none};

    text-align: left;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.text};
    color: ${p => p.theme.colors.label};

    outline: none;
`;

export const ClassicLabelForm = styled.label`
    text-align: left;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.text};
    color: ${p => p.theme.colors.label};
`;






