import styled from "styled-components";
import {
  Footer,
  Header,
  ProductTitle,
  Sidebar,
  TopHeader,
} from "../components";
import { useEffect, useState } from "react";
import { BannerImg } from "../../assets/home/banner";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { ProductBox } from "../components/productBox/productBox";
import { Controller } from "../../assets/home/controller";

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
  gap: 20px;
  height: 100vh;
`;

const HeaderProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 140px;
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
        <ProductTitle>Today’s</ProductTitle>
        <ContainerTimer>
          <TitleText>Flash Sales</TitleText>
          <Timer>
            <TimerSegment>
              <TimerLabel>Days</TimerLabel>
              <TimerValue>{timeLeft.days}</TimerValue>
            </TimerSegment>
            <TimerSegment>
              <TimerLabel>Hours</TimerLabel>
              <TimerValue>{timeLeft.hours}</TimerValue>
            </TimerSegment>
            <TimerSegment>
              <TimerLabel>Minutes</TimerLabel>
              <TimerValue>{timeLeft.minutes}</TimerValue>
            </TimerSegment>
            <TimerSegment>
              <TimerLabel>Seconds</TimerLabel>
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
        <ProductBox text="HAVIT HV-G92 Gamepad" value="$120">
          <Controller />
        </ProductBox>
        <ProductBox text="HAVIT HV-G92 Gamepad" value="$120">
          <Controller />
        </ProductBox>
        <ProductBox text="HAVIT HV-G92 Gamepad" value="$120">
          <Controller />
        </ProductBox>
        <ProductBox text="HAVIT HV-G92 Gamepad" value="$120">
          <Controller />
        </ProductBox>
        <ProductBox text="HAVIT HV-G92 Gamepad" value="$120">
          <Controller />
        </ProductBox>
        <ProductBox text="HAVIT HV-G92 Gamepad" value="$120">
          <Controller />
        </ProductBox>
      </ContainerProducts>
      <Footer />
    </Stack>
  );
};
