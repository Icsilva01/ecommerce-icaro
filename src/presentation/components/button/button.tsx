import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const ButtonEstilizado = styled.button`
  padding: 16px 28px;
  background-color: #DB4444;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;


export const Button = ({children}: Props) => {
  return <ButtonEstilizado type="submit">{children}</ButtonEstilizado>;
}