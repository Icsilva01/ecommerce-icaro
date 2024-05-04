import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxNav = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 80px;
  gap: 30px;
`;

export const TextNav = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #7d8184;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;
export const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #000000;
  font-family: "Roboto", sans-serif;
`;

export const SidebarContainer = styled.div`
width: 20%;
padding: 20px 60px;
height: 100%;
`;