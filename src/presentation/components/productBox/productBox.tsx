import { ReactNode, useState } from "react";
import { IoEyeOutline, IoHeart } from "react-icons/io5";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  text: string;
  value?: string;
  rating?: ReactNode;
};

type IconProps = {
  clicked: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0px 20px 60px;
  width: 250px;
  height: 370px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); // adjust this value as needed
  }
`;
const BoxProduct = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const BoxInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const BoxDiscount = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DiscountTitle = styled.h1`
  width: 45px;
  height: 22px;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #ffff;
  background-color: #db4444;
  border-radius: 4px;
  text-align: center;
  padding-top: 4px;
`;

const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FavoriteIcon = styled(IoHeart)<IconProps>`
  color: ${(props) => (props.clicked ? "#DB4444" : "#")};
  border: 1px solid ${(props) => (props.clicked ? "#DB4444" : "#000000")};
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;
const EyeIcon = styled(IoEyeOutline)<IconProps>`
  color: ${(props) => (props.clicked ? "#DB4444" : "#")};
  height: 20px;
  width: 20px;
`;
const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Description = styled.h1`
  font-size: 11px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;

const Value = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #db4444;
  font-family: "Roboto", sans-serif;
`;

export const ProductBox = ({ children, text, value }: Props) => {
  const [clicked, setClicked] = useState(false);
  const [eyeClicked, setEyeClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const handleEyeClicked = () => {
    setEyeClicked(!eyeClicked);
  };
  return (
    <Container>
      <BoxProduct>
        <BoxInformation>
          <BoxDiscount>
            <DiscountTitle>-10%</DiscountTitle>
            <ContainerIcon>
              <FavoriteIcon clicked={clicked} onClick={handleClicked} />
              <EyeIcon clicked={eyeClicked} onClick={handleEyeClicked} />
            </ContainerIcon>
          </BoxDiscount>
          {children}
        </BoxInformation>
      </BoxProduct>
      <BoxDescription>
        <Description>{text}</Description>
        <Value>{value}</Value>
      </BoxDescription>
    </Container>
  );
};
