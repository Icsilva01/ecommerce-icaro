import { t } from "i18next";
import { Header, TopHeader } from "../components";
import {
  BoxNav,
  Container,
  SidebarContainer,
  Stack,
  Text,
  TextNav,
} from "../components/styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ManageAccount = () => {
  const [components, setComponents] = useState<string>("");
  const navigate = useNavigate();

  const handleComponent = (component: string) => {
    setComponents(component);
  };

  const renderComponent = () => {
    switch (components) {
      case "MANAGE.MY.PROFILE":
        return <Text>{t("MANAGE.MY.PROFILE")}</Text>;
    }
  };

  return (
    <Stack>
      <TopHeader />
      <Header />
      <Container
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "30px",
        }}
      >
        <BoxNav>
          <TextNav onClick={() => navigate("/")}>{t("MENU.HOME")}</TextNav>/{" "}
          <TextNav style={{ color: "#000000", cursor: "auto" }}>
            {t("MENU.MANAGE.ACCOUNT")}
          </TextNav>
        </BoxNav>
        <Container style={{ gap: "5px" }}>
          <Text>{t("WELCOME")}</Text>
          <Text style={{ color: "#DB4444" }}> usuário</Text>
        </Container>
      </Container>
      <Container>
        <SidebarContainer>
          <Text
            onClick={() => handleComponent("MANAGE.MY.PROFILE")}
            style={{ fontSize: "16px", fontWeight: 700, cursor: "pointer" }}
          >
            {t("MANAGE.MY.ACCOUNT")}
          </Text>
          <Stack style={{ padding: "10px 0 10px 20px", gap: "8px" }}>
            <Text
              onClick={() => handleComponent("MANAGE.MY.PROFILE")}
              style={{
                color:
                  components === "MANAGE.MY.PROFILE" ? "#DB4444" : "#7D8184",
                cursor: "pointer",
              }}
            >
              {t("MANAGE.MY.PROFILE")}
            </Text>
            <Text
              onClick={() => handleComponent("MANAGE.MY.ADDRESS")}
              style={{
                color:
                  components === "MANAGE.MY.ADDRESS" ? "#DB4444" : "#7D8184",
                cursor: "pointer",
              }}
            >
              {t("MANAGE.MY.ADDRESS")}
            </Text>
            <Text
              onClick={() => handleComponent("MANAGE.MY.PAYMENTS")}
              style={{
                color:
                  components === "MANAGE.MY.PAYMENTS" ? "#DB4444" : "#7D8184",
                cursor: "pointer",
              }}
            >
              {t("MANAGE.MY.PAYMENTS")}
            </Text>
          </Stack>
          <Text
            onClick={() => handleComponent("MANAGE.MY.ORDER")}
            style={{ fontSize: "16px", fontWeight: 700, cursor: "pointer" }}
          >
            {t("MANAGE.MY.ORDER")}
          </Text>
          <Stack style={{ padding: "10px 0 10px 20px", gap: "8px" }}>
            <Text
              onClick={() => handleComponent("MANAGE.MY.RETURN")}
              style={{
                color:
                  components === "MANAGE.MY.RETURN" ? "#DB4444" : "#7D8184",
                cursor: "pointer",
              }}
            >
              {t("MANAGE.MY.RETURN")}
            </Text>
            <Text
              onClick={() => handleComponent("MANAGE.MY.CANCEL")}
              style={{
                color:
                  components === "MANAGE.MY.CANCEL" ? "#DB4444" : "#7D8184",
                cursor: "pointer",
              }}
            >
              {t("MANAGE.MY.CANCEL")}
            </Text>
          </Stack>
          <Text
            onClick={() => handleComponent("MANAGE.MY.WISHLIST")}
            style={{ fontSize: "16px", fontWeight: 700, cursor: "pointer" }}
          >
            {t("MANAGE.MY.WISHLIST")}
          </Text>
        </SidebarContainer>
        {renderComponent()}
      </Container>
    </Stack>
  );
};
