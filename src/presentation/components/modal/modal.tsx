import { t } from "i18next";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
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
  padding-bottom: 20px;
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
  color: #db4444;
  font-family: "Roboto", sans-serif;
  text-align: center;
  padding-bottom: 20px;
`;

const ButtonEstilizado = styled.button`
  padding: 8px 28px;
  background-color: #db4444;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  width: 20%;
`;

export const Modal = ({ onClose, title }: ModalProps) => {
  return (
    <ModalEstilizado>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>
          <GrClose />
        </ModalCloseButton>
        <ModalTitle>{title}</ModalTitle>
        <Link to="/login">
          <ButtonEstilizado>{t("BUTTON.OK")}</ButtonEstilizado>
        </Link>
      </ModalContent>
    </ModalEstilizado>
  );
};
