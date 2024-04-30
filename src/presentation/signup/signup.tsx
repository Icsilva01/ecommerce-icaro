import { useState } from "react";
import styled from "styled-components";
import { Button, Footer, Header, Input, TopHeader } from "../components";
import { ImageLogin } from "../../assets/login/Image-login";
import { Link, useNavigate } from "react-router-dom";
import { t } from "i18next";

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  gap: 100px;
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

const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const SignUp = () => {
  const [state, setState] = useState({
    email: "",
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState((state) => ({
      ...state,
      modal: true,
    }));
    navigate("/login");
  };
  return (
    <div>
      <TopHeader />
      <Header />
      <Container>
        <ImageLogin />
        <LoginForm onSubmit={handleSubmit}>
          <Title>{t("SIGNUP.TITLE")}</Title>
          <Text>{t("SIGNUP.TEXT")}</Text>
          <Input
            autoComplete="off"
            type="text"
            placeholder={t("PLACEHOLDER.NAME")}
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <Input
            autoComplete="off"
            type="email"
            placeholder={t("PLACEHOLDER.EMAIL")}
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <Input
            autoComplete="off"
            type="password"
            placeholder={t("PLACEHOLDER.PASSWORD")}
            name="password"
            value={state.password}
            onChange={handleChange}
          />
          <Button>{t("BUTTON.SIGNUP")}</Button>
          <ContainerLogin>
            <Text>{t("SIGNUP.ALREADY.ACCOUNT")}</Text>
            <Link to="/login">
              <Text>{t("BUTTON.LOGIN")}</Text>
            </Link>
          </ContainerLogin>
        </LoginForm>
      </Container>
      <Footer />
    </div>
  );
};
