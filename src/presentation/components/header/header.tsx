import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const HeaderEstilizado = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 80px;
  background-color: transparent;
  border-bottom: 1px solid #e5e5e5;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  font-family: "Roboto", sans-serif;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  &:hover,
  &:active,
  &:visited {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Input = styled.input`
  padding: 7px 10px;
  width: 243px;
  height: 38px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
`;

const Icon = styled(FaSearch)`
  position: absolute;
  right: 10px; // adjust this value based on the size of your icon
  top: 50%;
  transform: translateY(-50%);
  color: #000;
`;

export const Header = () => {
  return (
    <HeaderEstilizado>
      <Container>
        <Title>Exclusive</Title>
      </Container>
      <Container>
        <RouterLink to={"/"}>
          <Link>Home</Link>
        </RouterLink>
        <RouterLink to={"/contact"}>
          <Link>Contact</Link>
        </RouterLink>
        <RouterLink to={"/about"}>
          <Link>About</Link>
        </RouterLink>
        <RouterLink to={"/signup"}>
          <Link>Sign Up</Link>
        </RouterLink>
      </Container>
      <InputContainer>
        <Input type="text" placeholder="What are you looking for?" />
        <Icon />
      </InputContainer>
    </HeaderEstilizado>
  );
};
