import { useNavigate } from "react-router-dom";
import { t } from "i18next";
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
  const components = [
    {
      name: t("SIDEBAR.CATEGORIE.WOMAN"),
      link: "/error404"
    },
    {
      name: t("SIDEBAR.CATEGORIE.MEN"),
      link: "/error404"
    },
    {
      name: t("SIDEBAR.CATEGORIE.ELETRONICS"),
      link: "/error404"
    },
    {
      name: t("SIDEBAR.CATEGORIE.HOME"),
      link: "/error404"
    },
    {
      name: t("SIDEBAR.CATEGORIE.SPORTS"),
      link: "/error404"
    }
  ]
  return (
    <SidebarContainer>
      {components.map((sidebar, index) => (
          <Accordion key={index} onClick={() => navigate(sidebar.link)}>
            {sidebar.name}
          </Accordion>
      ))}
    </SidebarContainer>
  );
};
