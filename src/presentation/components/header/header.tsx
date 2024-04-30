import { t } from "i18next";
import { useState } from "react";
import { LuSearch, LuShoppingCart, LuUser } from "react-icons/lu";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

type PopoverProps = {
  show: boolean;
};
type IconProps = {
  clicked: boolean;
};

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

const Input = styled.input<{ show: boolean }>`
  padding: 7px 10px;
  width: ${(props) => (props.show ? "243px" : "0")};
  height: 38px;
  background-color: ${(props) => (props.show ? "#f5f5f5" : "transparent")};
  border: none;
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
  overflow: hidden;
`;

const Icon = styled(LuSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #000;
  cursor: pointer;
  height: 20px;
  width: 20px;
`;

const IconLogin = styled(LuUser)<IconProps>`
  position: absolute;
  right: -50px;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.clicked ? '#fff' : '#000'};
  background-color: ${props => props.clicked ? '#DB4444' : 'transparent'};
  cursor: pointer;
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;
const IconCart = styled(LuShoppingCart)`
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  color: '#000';
  background-color: 'transparent';
  cursor: pointer;
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

const Popover = styled.div<PopoverProps>`
  position: absolute;
  right: 0;
  top: 100%;
  width: 200px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(219, 68, 68, 0.7) 100%);
  border: none;
  border-radius: 4px;
  padding: 10px;
  z-index: 1;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
  ${props => props.show && `
    opacity: 1;
    max-height: 500px;
  `}
`;

const PopoverItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  &:hover {
    background-color: transparent;
  }
`;

export const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [MenuManager, setMenuManager] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenuManager(!MenuManager);
  };
  return (
    <HeaderEstilizado>
      <Container>
        <Title>Exclusive</Title>
      </Container>
      <Container>
        <RouterLink to={"/"}>
          <Link>
          {t("MENU.HOME")}
          </Link>
        </RouterLink>
        <RouterLink to={"/contact"}>
          <Link>
            {t("MENU.CONTACT")}
          </Link>
        </RouterLink>
        <RouterLink to={"/about"}>
          <Link>
            {t("MENU.ABOUT")}
          </Link>
        </RouterLink>
        <RouterLink to={"/signup"}>
          <Link>
            {t("MENU.SIGNUP")}
          </Link>
        </RouterLink>
      </Container>
      <InputContainer>
        <Input
          type="text"
          placeholder="What are you looking for?"
          show={showInput}
        />
        <Icon onClick={() => setShowInput(!showInput)} />
        <IconCart onClick={() => navigate('/cart')}/>
        <IconLogin clicked={MenuManager} onClick={handleMenu} />
          <Popover show={MenuManager}>
            <PopoverItem
              onClick={() => {
                navigate("/login");
              }}
            >
              {t("LOGIN.ACCOUNT")}
            </PopoverItem>
            <PopoverItem
              onClick={() => {
                navigate("/manager-account");
              }}
            >
              {t("MANAGE.ACCOUNT")}
            </PopoverItem>
          </Popover>
      </InputContainer>
    </HeaderEstilizado>
  );
};
