import { GrClose } from "react-icons/gr";
import styled from "styled-components";

type ModalProps = {
  children?: React.ReactNode;
  onClose: () => void;
  title: string;
};

const ModalEstilizado = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding-top: 20px;
  border: 1px solid #888;
  text-align: center;
  border-radius: 20px;
  width: 50%;
  height: 20%;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ModalTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #DB4444;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding-bottom: 20px;
`;

export const Modal = ({ children, onClose, title }: ModalProps) => {
  return (
    <ModalEstilizado>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>
          <GrClose />
          </ModalCloseButton>
          <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContent>
    </ModalEstilizado>
  );
}