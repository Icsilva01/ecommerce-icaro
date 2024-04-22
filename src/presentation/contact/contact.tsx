import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ImagePhone } from "../../assets/contact/IconsPhone";
import { Button, Footer, Header, TopHeader } from "../components";
import { ImageEmail } from "../../assets/contact/IconsEmail";
import { useState } from "react";
import MaskedInput from "react-input-mask";

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 80px;
  gap: 30px;
`;
const TextNavigation = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #7d8184;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20.8px 35px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const InputEstilizadoo = styled.input`
  padding: 7px 10px;
  width: 243px;
  height: 38px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
`;

const TextArea = styled.textarea`
  padding: 7px 10px;
  max-width: 800px;
  height: 207px;
  background-color: #f5f5f5;
  border: none;
  font-family: "Roboto", sans-serif;
  border-radius: 4px;
`;

const StyledMaskedInput = styled(MaskedInput)`
padding: 7px 10px;
width: 243px;
height: 38px;
background-color: #f5f5f5;
border: none;
border-radius: 4px;
font-family: "Roboto", sans-serif;
`;

const BoxButton = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px 0 0 0;
`;

export const Contact = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    phone: "",
    text: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const handleChangeTextArea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  return (
    <div>
      <TopHeader />
      <Header />
      <Box>
        <TextNavigation onClick={() => navigate("/")}>
          {t("MENU.HOME")}
        </TextNavigation>
        /{" "}
        <TextNavigation style={{ color: "#000000", cursor: "auto" }}>
          {t("MENU.CONTACT")}
        </TextNavigation>
      </Box>
      <Box>
        <Stack>
          <Box style={{ padding: "0" }}>
            <ImagePhone />
            <TextNavigation style={{ color: "#000000" }}>
              {t("CONTACT.PHONE")}
            </TextNavigation>
          </Box>
          <TextNavigation
            style={{
              color: "#000000",
              paddingBottom: "16px",
              paddingTop: "24px",
            }}
          >
            {t("CONTACT.PHONE.AVAILABLE")}
          </TextNavigation>
          <TextNavigation
            style={{
              color: "#000000",
              borderBottom: "0.5px solid #7D8184",
              paddingBottom: "32px",
            }}
          >
            {t("CONTACT.PHONE.VALUE")}
          </TextNavigation>
          <Box style={{ padding: "32px 0 0 0" }}>
            <ImageEmail />
            <TextNavigation style={{ color: "#000000" }}>
              {t("CONTACT.EMAIL")}
            </TextNavigation>
          </Box>
          <TextNavigation
            style={{
              maxWidth: "300px",
              cursor: "auto",
              color: "#000000",
              paddingBottom: "16px",
              paddingTop: "24px",
            }}
          >
            {t("CONTACT.EMAIL.TEXT")}
          </TextNavigation>
          <TextNavigation
            style={{
              cursor: "auto",
              color: "#000000",
              paddingBottom: "32px",
            }}
          >
            {t("CONTACT.EMAIL.VALUE.1")}
          </TextNavigation>
          <TextNavigation
            style={{
              cursor: "auto",
              color: "#000000",
              paddingBottom: "32px",
            }}
          >
            {t("CONTACT.EMAIL.VALUE.2")}
          </TextNavigation>
        </Stack>
        <Stack>
          <Box style={{ padding: "0" }}>
            <InputEstilizadoo
              placeholder={t("PLACEHOLDER.EMAIL")}
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <InputEstilizadoo
              placeholder={t("PLACEHOLDER.NAME")}
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
            />
            <StyledMaskedInput
              mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              placeholder={t("PLACEHOLDER.PHONE")}
              name="phone"
              type="text"
              value={values.phone}
              onChange={handleChange}
            />
          </Box>
          <TextArea
            placeholder={t("PLACEHOLDER.MESSAGE")}
            name="text"
            value={values.text}
            onChange={handleChangeTextArea}
          />
          <BoxButton>
          <Button>
            {t("BUTTON.CONTACT")}
          </Button>
          </BoxButton>
        </Stack>
      </Box>
      <Footer />
    </div>
  );
};
