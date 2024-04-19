import styled from 'styled-components';

export const AuthButton = styled.div`
    display: flex;
    align-items: center;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radius.l};
    border-color: ${p => p.theme.backgroundColor.main};

    &:hover, &:focus, &:active {
        background-color: ${p => p.theme.backgroundColor.buttonActive};
        border: ${p => `${p.theme.borders.button} ${p.theme.colors.border}`};
    }
`;

export const Login = styled.div`
    display: flex;
    align-items: center;
    background-color: ${p => p.theme.backgroundColor.button};
    font-family: "Inter", sans-serif;
`;

export const LogButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${p => p.theme.backgroundColor.button};
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
