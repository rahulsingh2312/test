import * as React from "react";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../App.css";
import PersonalInfo from "./FormInputDifferentSection/PersonalInfo";
import LoginLogoSection from "./LoginLogoSection";
import DetailInfoContainer from "./FormInputDifferentSection/DetailInfoContainer";
import SuccesContainer from "./FormInputDifferentSection/SuccesContainer";
import Layout from "./Layout";
import DocumentContainer from "./FormInputDifferentSection/DocumentContainer";
function Login() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <LoginLogoSection />
        <Layout activeTab={activeTab}>
          {activeTab === 0 ? (
            <PersonalInfo setActiveTab={setActiveTab} />
          ) : activeTab === 1 ? (
            <DetailInfoContainer setActiveTab={setActiveTab} />
          ) : activeTab === 2 ? (
            <DocumentContainer setActiveTab={setActiveTab} />
          ) : activeTab === 3 ?(
            <SuccesContainer setActiveTab={setActiveTab} />
          ):null}
        </Layout>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
