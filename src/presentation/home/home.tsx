import { useEffect, useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import styled from "styled-components";
import { BannerImg } from "../../assets/home/banner";
import { products } from "../../assets/home/products";
import {
  Footer,
  Header,
  ProductTitle,
  Sidebar,
  TopHeader,
} from "../components";
import { ProductBox } from "../components/productBox/productBox";
import { t } from "i18next";

const Container = styled.div`
  display: flex;
  gap: 100px;
`;
const ContainerButton = styled.div`
  display: flex;
  gap: 50px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 100px;
  padding-left: 60px;
`;

const TitleText = styled.h1`
  font-size: 36px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
`;

const ContainerTimer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
`;

const Timer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

const TimerSegment = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const TimerLabel = styled.span`
  font-size: 12px;
  font-family: "Roboto", sans-serif;
`;

const TimerValue = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: #000;
  font-family: "Roboto", sans-serif;
`;

const ButtonBack = styled(IoArrowBackCircleOutline)`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const ButtonNext = styled(IoArrowForwardCircleOutline)`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const ContainerProducts = styled.div`
  display: flex;
  gap: 15px;
`;

export const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    const countdownDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 3
    ).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack>
      <TopHeader />
      <Header />
      <Container>
        <Sidebar />
        <BannerImg />
      </Container>
      <HeaderProducts>
        <ProductTitle>{t("HOME.TODAY")}</ProductTitle>
        <ContainerTimer>
          <TitleText>{t("HOME.FLASH.SALE")}</TitleText>
          <Timer>
            <TimerSegment>
              <TimerLabel>{t("HOME.DAY")}</TimerLabel>
              <TimerValue>{timeLeft.days}</TimerValue>
            </TimerSegment>
            <TimerSegment>
              <TimerLabel>{t("HOME.HOURS")}</TimerLabel>
              <TimerValue>{timeLeft.hours}</TimerValue>
            </TimerSegment>
            <TimerSegment>
              <TimerLabel>{t("HOME.MINUTES")}</TimerLabel>
              <TimerValue>{timeLeft.minutes}</TimerValue>
            </TimerSegment>
            <TimerSegment>
              <TimerLabel>{t("HOME.SECONDS")}</TimerLabel>
              <TimerValue>{timeLeft.seconds}</TimerValue>
            </TimerSegment>
          </Timer>
          <ContainerButton>
            <ButtonBack />
            <ButtonNext />
          </ContainerButton>
        </ContainerTimer>
      </HeaderProducts>
      <ContainerProducts>
        <ContainerProducts>
          {products.map((product, index) => (
            <ProductBox key={index} text={product.text} value={product.value}>
              <product.Component />
            </ProductBox>
          ))}
        </ContainerProducts>
      </ContainerProducts>
      <Footer />
    </Stack>
  );
};
