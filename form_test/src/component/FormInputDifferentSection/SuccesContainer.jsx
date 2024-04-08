import React, { useEffect } from "react";
import successLogo from "../../assets/check.png"
import { createUseStyles } from "react-jss";
import theme from "../../Theme/style";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
const useStyles = createUseStyles({
    SuccesContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        height:"80vh",
        width:"100%",
    },
    headerText:{
        fontFamily:theme.fontFamily
    },
    image:{
        marginTop:"20px",
    },
    closeButton:{
      marginTop:"40px"
    },
    text:{
      fontSize:"16px",
      fontWeight:"600"
    },
    span:{
      fontSize:"22px",
      fontWeight:"800"
    }
 })
function SuccesContainer({setActiveTab}) {
    const classes =useStyles();
    const data =useSelector(state=>state.Reducer);
    // console.log(data.employeeName.employeeName)
  return (
    <div className={classes.SuccesContainer}>
      <img src={successLogo} width={70} alt="successImage" className={classes.image}/>
      <h1 className={classes.headerText}>
        Successfully Added 
      </h1>
        <p className={classes.text}>Hello , Welcome to our Company <span className={classes.span}>{data.employeeName.employeeName}</span></p> 
        {/* <p className={classes.text}>In our DataBase</p> */}
        <div className={classes.closeButton}>
            <Button variant="contained" onClick={()=>setActiveTab(0)}>Close</Button>
        </div>
    </div>
  );
}

export default SuccesContainer;
