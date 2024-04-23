import { t } from "i18next";
import { Footer, Header, TopHeader } from "../components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImageAbout, ImageMarket, ImageMoney, ImageShopping, ImageMoneyBag } from "../../assets";

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

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 510px;
`;
const TextTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  font-family: "Roboto", sans-serif;
  padding-bottom: 50px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto", sans-serif;
  line-height: 24px;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  padding: 30px 50px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #DB4444;
    transform: scale(1.1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopHeader />
      <Header />
      <Box>
        <TextNavigation onClick={() => navigate("/")}>
          {t("MENU.HOME")}
        </TextNavigation>
        /{" "}
        <TextNavigation style={{ color: "#000000", cursor: "auto" }}>
          {t("MENU.ABOUT")}
        </TextNavigation>
      </Box>
      <Box style={{justifyContent:"space-between"}}>
        <Stack>
          <TextTitle>
            {t("ABOUT.TITLE")}
          </TextTitle>
          <Text>
            {t("ABOUT.TEXT")}
          </Text>
          <Text>
            {t("ABOUT.TEXT.2")}
          </Text>
        </Stack>
        <ImageAbout />
      </Box>
      <Box style={{justifyContent:'center'}}>
        <Cards>
          <ImageMarket />
          <TextTitle style={{paddingBottom:0}}>
            10.5K
          </TextTitle>
          <Text>
            {t("ABOUT.SALERS")}
            </Text>
        </Cards>
        <Cards>
          <ImageMoney />
          <TextTitle style={{paddingBottom:0}}>
            33K
          </TextTitle>
          <Text>
            {t("ABOUT.PRODUCTS")}
            </Text>
        </Cards>
        <Cards>
          <ImageShopping />
          <TextTitle style={{paddingBottom:0}}>
            45.5K
          </TextTitle>
          <Text>
            {t("ABOUT.CLIENTS")}
            </Text>
        </Cards>
        <Cards>
          <ImageMoneyBag />
          <TextTitle style={{paddingBottom:0}}>
            25K
          </TextTitle>
          <Text>
            {t("ABOUT.ANUAL")}
            </Text>
        </Cards>
      </Box>
      <Footer />
    </div>
  );
};
