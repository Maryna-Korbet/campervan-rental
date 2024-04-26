import styled from 'styled-components';

export const FormContainer = styled.form`
    width: 448px;
    height: 532px;
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
    border-radius: ${p => p.theme.radius.s};
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.border};
`;

export const FormTextList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FormText = styled.p`
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.h2};
    color: ${p => p.theme.colors.text};
`;

export const FormInputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const FormInput = styled.input`
    display: flex;
    font-family: Inter;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.main};
    text-align: left;
    padding: 16px 16px;
    width: 100%;
    border-radius: ${p => p.theme.radius.s};
    background-color: ${p => p.theme.colors.input};
`;

export const FormTextarea = styled.textarea`
    display: flex;
    font-family: Inter;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.regular};
    line-height: ${p => p.theme.lineHeights.main};
    text-align: left;
    padding: 16px 16px;
    width: 100%;
    height: 82px;
    border-radius: ${p => p.theme.radius.s};
    background-color: ${p => p.theme.colors.input};
`;

export const FormButton = styled.button`
    width: 160px;
    height: 56px;
    padding: 16px 60px 16px 60px;
    border-radius: ${p => p.theme.radius.l};
    cursor: pointer;

    font-family: ${p => p.theme.fonts.main};
    color: ${p => p.theme.colors.buttonText};
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.medium};
    line-height: ${p => p.theme.lineHeights.main};
    letter-spacing: -0.5%;
    background: ${p => p.theme.backgroundColor.button};

    &:hover {
        border-color: ${p => p.theme.backgroundColor.buttonActive};
    }
`;
