import React from 'react';
import styled from 'styled-components';

const Modal = (props) => {
  const { children, isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const ModalContent = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 360px;
`;

const ModalOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.7);
`;
