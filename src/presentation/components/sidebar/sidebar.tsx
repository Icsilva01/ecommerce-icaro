import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 20%;
  padding: 20px 60px;
  border-right: 1px solid #ccc;
  height: 100%;
`;

const Accordion = styled.div`
  cursor: pointer;
  padding: 10px;
  text-align: left;
  outline: none;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
`;


export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <SidebarContainer onClick={() => navigate('/error404')}>
      {['Woman’s Fashion', 'Men’s Fashion', 'Electronics', 'Home & Lifestyle', 'Medicine', 'Sports'].map((sidebar, index) => (
        <div key={index}>
          <Accordion>
            {sidebar}
          </Accordion>
        </div>
      ))}
    </SidebarContainer>
  );
};
