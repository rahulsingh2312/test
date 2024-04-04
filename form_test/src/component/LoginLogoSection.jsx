import React from 'react'
import { createUseStyles } from 'react-jss'
import theme from '../Theme/style';
import logo from "../assets/logo.png"
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Grid, Typography } from '@mui/material';
const useStyles =createUseStyles({
  LoginLeftLogoSection:{
    backgroundColor:theme.colors.loginBlueColor,
    // width:"100%",
    height:"100vh",
  }
})

function LoginLogoSection() {
  const classes =useStyles();
  return (
   <>
        <CssBaseline />
        {/* Blue background side */}
        <Grid
          item
          xs={12}
          sm={4}
          md={6}
          sx={{
            backgroundColor: "#09407A",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <img src={logo} alt="logo" />
          <Typography
            component="h1"
            variant="h6"
            sx={{
              color: "#BBBBBB",
              fontWeight: "700",
              fontSize: "1.15rem",
              textAlign: "center",
              maxWidth: "60%",
              fontFamily:"Lato", 
            }}
          >
           Welcome aboard! Get ready to embark on a journey of growth, collaboration, and success with our team .
          </Typography>
          <Box
            mt={25}
            mb={3}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "35px",
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              sx={{
                color: "#BBBBBB",
                fontWeight: "550",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Privacy
            </Typography>
            <Typography
              component="h1"
              variant="h6"
              sx={{
                color: "#BBBBBB",
                fontWeight: "550",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Terms & Condition
            </Typography>
          </Box>
        </Grid>
   </>
  )
}

export default LoginLogoSection
