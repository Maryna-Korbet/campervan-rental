import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import { ModalContent, ModalOverlay, CloseButton } from './Modal.styled';


const Modal = ({ isCloseModal, children }) => {

    const modalRoot = document.querySelector('#modal-root');

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                isCloseModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

    return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isCloseModal]);

    const handleCloseModal = e => {
        if (e.target === e.currentTarget) {
        isCloseModal();
    }
};

return createPortal(
    <ModalOverlay onClick={handleCloseModal}>
        <ModalContent>
            <CloseButton onClick={isCloseModal}>
                <CloseIcon style={{ width: 32, height: 32 }} />
            </CloseButton>
            {children}
        </ModalContent>
    </ModalOverlay>,
    modalRoot
)
};

export default Modal;