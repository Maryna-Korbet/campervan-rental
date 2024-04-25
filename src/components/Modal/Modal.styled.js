import styled from 'styled-components';

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor.modal};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    padding: 40px;
    border-radius: ${({ theme }) => theme.radius.m};
    width: 982px;
    height: 720px;
    max-height: 90%;
    position: relative; 
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 40px;
    right: 40px;
    z-index: 100;
    cursor: pointer;

    color: ${({ theme }) => theme.colors.main};

    &:hover {
        color: ${({ theme }) => theme.colors.label};
    }
`;