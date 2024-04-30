import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
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
  opacity: ${(props: { disabled?: boolean }) => (props.disabled ? 0.5 : 1)};
`;


export const Button = ({children, disabled}: Props) => {
  return <ButtonEstilizado type="submit" disabled={disabled}>{children}</ButtonEstilizado>;
}