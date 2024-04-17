import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 20%;
  padding: 20px 60px;
  border-right: 1px solid #ccc;
  height: 100%;
`;

const Accordion = styled.div`
  cursor: pointer;
  padding: 18px;
  text-align: left;
  outline: none;
  transition: 0.4s;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
`;


export const Sidebar = () => {
  return (
    <SidebarContainer>
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
