import styled from "styled-components";

type ProductTitleProps = {
  children: React.ReactNode;
};

const Text = styled.h1`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  color: #db4444;
`;
const Paper = styled.div`
  width: 20px;
  height: 40px;
  border-radius: 4px;
  background-color: #db4444;
`;
const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const ProductTitle = ({ children }: ProductTitleProps) => {
  return (
    <Container>
      <Paper />
      <Text>{children}</Text>
    </Container>
  );
};
