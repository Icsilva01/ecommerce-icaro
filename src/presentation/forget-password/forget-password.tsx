import { useState } from "react";
import styled from "styled-components";
import { ImageLogin } from "../../assets/login/Image-login";
import { Button, Footer, Header, Input, Modal, TopHeader } from "../components";
import { Link } from "react-router-dom";

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

const ButtonEstilizado = styled.button`
  padding: 8px 28px;
  background-color: #db4444;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  width: 20%;
`;

export const ForgetPassword = () => {
  const [state, setState] = useState({
    email: "",
    modal: false,
  });

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
  };

  const handleCloseModal = () => {
    setState((state) => ({
      ...state,
      modal: false,
    }));
  };
  return (
    <div>
      <TopHeader />
      <Header />
      <Container>
        <ImageLogin />
        <LoginForm onSubmit={handleSubmit}>
          <Title>Forget password?</Title>
          <Text>Enter your email</Text>
          <Input
            autoComplete="off"
            type="email"
            placeholder="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
          <Button>Send new password</Button>
        </LoginForm>
      </Container>
      <Footer />
      {state.modal && (
        <Modal onClose={handleCloseModal} title="Email successfully sent">
          <Link to="/">
            <ButtonEstilizado>OK</ButtonEstilizado>
          </Link>
        </Modal>
      )}
    </div>
  );
};
