import React from "react";
import LoginLogoSection from "../component/LoginLogoSection";
import LoginForm from "../component/LogonForm";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  loginContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.loginContainer}>
        <LoginForm />
    </div>
  );
}

export default LoginPage;
