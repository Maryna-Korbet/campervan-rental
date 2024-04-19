import styled from 'styled-components';

export const ButtonBox = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    font-style: normal;

    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.sx};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.button};
    letter-spacing: ${p => p.theme.letterSpacing.button};

    transition: ${p => p.theme.transition.cubicBezier};
    transform: ${p => p.theme.transform.scaleSecond};
    cursor: pointer;
`;