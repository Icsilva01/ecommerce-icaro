import { Trans, useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const TopHeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  background-color: #000000;
  gap: 100px;
  position: relative;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const Select = styled.select`
  padding: 10px;
  color: #ffffff;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 40px;
`;
const Option = styled.option`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #fff;
`;

const Texto = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  font-family: Arial, sans-serif;
`;
const Link = styled.a`
  color: #ffffff;
  text-decoration: underline;
  font-size: 14px;
  font-weight: 700;
  font-family: Arial, sans-serif;
`;

export const TopHeader = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <TopHeaderEstilizado>
      <Container>
        <Texto>
          <Trans i18nKey={"TOP.MENU.TEXT"} />
        </Texto>
        <RouterLink to={"/shop"}>
          <Link>
            <Trans i18nKey={"TOP.MENU.SHOP.NOW"} />
          </Link>
        </RouterLink>
      </Container>
      <Select value={i18n.language} onChange={handleLanguageChange}>
        <Option value={"ptBr"}>
          <Trans i18nKey={"TOP.MENU.SELECT.PORTUGUESE"} />
        </Option>
        <Option value={"en"}>
          <Trans i18nKey={"TOP.MENU.SELECT.ENGLISH"} />
        </Option>
      </Select>
    </TopHeaderEstilizado>
  );
};
