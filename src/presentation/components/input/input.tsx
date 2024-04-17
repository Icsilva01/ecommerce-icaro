import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const InputEstilizado = styled.input<{ error?: boolean }>`
  padding: 20px 4px;
  width: 100%;
  height: 38px;
  color: #000000;
  border: none;
  border-bottom: 1px solid #e9eaec;
  outline: none;
  ${props => props.error ? 'border-color: #B71F3B' : ''}
`;

const Icon = styled.span`
  position: absolute;
  right: 10px;
  top: 20%;
  cursor: help;
`;


const TextError = styled.span`
  color: #B71F3B;
  font-size: 12px;
`;

export const Input: React.FC<Props> = (props: Props) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (props.type === 'email' && typeof props.value === 'string') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setError(!emailRegex.test(props.value));
    } else if (props.type === 'password' && typeof props.value === 'string') {
      setError(props.value.length < 8);
    } else if (props.type === 'text' && typeof props.value === 'string') {
      setError(props.value.length < 3);
    }

  }, [props.value, props.type]);

  return (
    <InputContainer>
      <InputEstilizado {...props} error={error}/>
      <Icon title={props.title}>{error ? '🔴' : '🟢'}</Icon>
      {error ? <TextError>{props.name} is invalid</TextError> : <TextError>&nbsp;</TextError>}
    </InputContainer>
  );
};
