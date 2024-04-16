import { GrGithub, GrLinkedin } from "react-icons/gr";
import styled from "styled-components";

const FooterEstilizado = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 10px 0;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;
const ContainerLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

export const Footer = () => {
  return (
    <FooterEstilizado>
      2024 © Desenvolvido por Icaro Silva | Projeto fictício sem fins
      comerciais.
      <ContainerLinks>
        <Link href="https://www.linkedin.com/in/icaroggsilva">
          <GrLinkedin />
        </Link>
        <Link href="https://github.com/Icsilva01">
          <GrGithub />
        </Link>
      </ContainerLinks>
    </FooterEstilizado>
  );
};
