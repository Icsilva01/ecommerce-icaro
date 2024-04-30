import styled from "styled-components";
import { ImageLogin } from "../../assets/login/Image-login";
import { useEffect, useState } from "react";
import { Button, Footer, Header, Input, TopHeader } from "../components";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import { t } from "i18next";

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  gap: 100px;
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding: 0px 100px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  gap: 20px;
  width: 50%;
  padding: 0 130px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #000;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #000;
  font-family: "Roboto", sans-serif;
`;
const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #000;
  font-family: "Roboto", sans-serif;
`;

const Link = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #db4444;
  font-family: "Roboto", sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

export const Login = () => {
  const { makeLogin, user } = useAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
    error: false,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    makeLogin({ email: state.email, password: state.password });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  return (
    <div>
      <TopHeader />
      <Header />
      <Container>
        <ImageLogin />
        <LoginForm onSubmit={handleSubmit}>
          <Title>{t('LOGIN.TITLE')}</Title>
          <Text>{t('LOGIN.TEXT')}</Text>
          <Input
            autoComplete="off"
            type="email"
            placeholder={t('PLACEHOLDER.EMAIL')}
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            autoComplete="off"
            placeholder={t('PLACEHOLDER.PASSWORD')}
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <ContainerButton>
            <Button>{t('BUTTON.LOGIN')}</Button>
            <RouterLink to={"/forget-password"}>
              <Link>{t('BUTTON.FORGET.PASSWORD')}</Link>
            </RouterLink>
          </ContainerButton>
        </LoginForm>
      </Container>
      <Footer />
    </div>
  );
};
