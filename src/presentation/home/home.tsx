import { useEffect, useState } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import styled from "styled-components";
import {
  Footer,
  Header,
  ProductTitle,
  Sidebar,
  TopHeader,
} from "../components";
import { ProductBox } from "../components/productBox/productBox";
import { t } from "i18next";
import { BannerImg, Ps5Img, SpeakersImg, products } from "../../assets";
import { WomemBanner } from "../../assets/home/womemBanner";
import { PerfumeImg } from "../../assets/home/perfumeImg";
import { DeliveryImg } from "../../assets/home/deliveryImg";
import { HeadsetImg } from "../../assets/home/headsetImg";
import { SecurityImg } from "../../assets/home/securityImg";

const Container = styled.div`
  display: flex;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 80px;
  padding-left: 60px;
`;

const TitleText = styled.h1`
  font-size: 36px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
`;

const Text = styled.p`
  font-size: 14px;
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
    <Stack style={{ height: "100vh" }}>
      <TopHeader />
      <Header />
      <Container style={{ gap: "100px" }}>
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
          <Container style={{ gap: "50px" }}>
            <ButtonBack />
            <ButtonNext />
          </Container>
        </ContainerTimer>
      </HeaderProducts>
      <Container style={{gap:"15px"}}>
        {products.map((product, index) => (
          <ProductBox key={index} text={product.text} value={product.value}>
            <product.Component />
          </ProductBox>
        ))}
      </Container>
      <HeaderProducts>
        <ProductTitle>{t("HOME.FEATURE")}</ProductTitle>
        <ContainerTimer>
          <TitleText>{t("HOME.NEW")}</TitleText>
        </ContainerTimer>
        <Container style={{ gap: "30px", paddingBottom: "10px", justifyContent:"center" }}>
          <Ps5Img />
          <Container style={{ gap: "30px", flexDirection: "column" }}>
            <WomemBanner />
            <Container style={{ gap: "30px" }}>
              <SpeakersImg />
              <PerfumeImg />
            </Container>
          </Container>
        </Container>
      </HeaderProducts>
      <Container
        style={{ justifyContent: "center", gap: "88px", padding: "80px 0" }}
      >
        <Stack style={{alignItems:"center", textAlign:"center", width:"300px", gap:"8px"}}>
          <DeliveryImg />
          <TitleText style={{fontSize:"20px", paddingTop:"12px"}}>{t("HOME.FAST.DELIVERY")}</TitleText>
          <Text>{t("HOME.FAST.DELIVERY.TEXT")}</Text>
        </Stack>
        <Stack style={{alignItems:"center", textAlign:"center", width:"300px", gap:"8px"}}>
          <HeadsetImg />
          <TitleText style={{fontSize:"20px", paddingTop:"12px"}}>{t("HOME.SUPPORT")}</TitleText>
          <Text>{t("HOME.SUPPORT.TEXT")}</Text>
        </Stack>
        <Stack style={{alignItems:"center", textAlign:"center", width:"300px", gap:"8px"}}>
          <SecurityImg />
          <TitleText style={{fontSize:"18px", paddingTop:"12px"}}>{t("HOME.SECURITY")}</TitleText>
          <Text>{t("HOME.SECURITY.TEXT")}</Text>
        </Stack>
      </Container>
      <Footer />
    </Stack>
  );
};
