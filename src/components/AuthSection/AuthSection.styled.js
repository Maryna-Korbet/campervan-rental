import styled from 'styled-components';

export const AuthButton = styled.button`
    display:flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    padding: 4px 24px;

    border-radius: ${p => p.theme.radius.l};
    opacity: ${p => p.theme.opacity.none};

    font-family: ${p => p.theme.fonts.main};
    font-size: ${p => p.theme.fontSizes.sx};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.button};
    letter-spacing: ${p => p.theme.letterSpacing.button};

    transition: ${p => p.theme.transition.cubicBezier};
    transform: ${p => p.theme.transform.scaleSecond};
    cursor: pointer;

    &:hover {
        background-color: ${p => p.theme.backgroundColor.buttonHover};
    }
`;

export const Login = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`;

export const LogButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.main};
    letter-spacing: -0.005em;
`;

export const AvatarUser = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
    border: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.backgroundColor.main};
    cursor: pointer;
`;

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;
