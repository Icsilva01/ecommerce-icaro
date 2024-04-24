import styled from "styled-components";
import { Button, Footer, Header, TopHeader } from "../components";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

const Stack = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 80px;
  gap: 30px;
`;
const TextNavigation = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #7d8184;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;

const TitleText = styled.h1`
  font-size: 80px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto", sans-serif;
  line-height: 24px;
`;

export const Error = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/");
  }

  return (
    <Stack onSubmit={handleSubmit}>
      <TopHeader />
      <Header />
      <Box>
        <TextNavigation onClick={() => navigate("/")}>
          {t("MENU.HOME")}
        </TextNavigation>
        /{" "}
        <TextNavigation style={{ color: "#000000", cursor: "auto" }}>
          {t("MENU.ERROR.404")}
        </TextNavigation>
      </Box>
      <Box style={{ flexDirection: "column", padding: "139.8px 0", gap:"50px" }}>
        <TitleText>{t("ERROR.404.TITLE")}</TitleText>
        <Text>{t("ERROR.404.TEXT")}</Text>
        <Button>{t("BUTTON.BACK.HOME")}</Button>
      </Box>
      <Footer />
    </Stack>
  );
};
