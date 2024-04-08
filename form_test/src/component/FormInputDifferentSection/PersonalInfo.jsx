import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { createUseStyles } from "react-jss";
import { useDispatch } from "react-redux";
import { employeeName, inputNumber } from "../../Store/Action";
import CustomTextFeild from "../common/TextFeild";

const useStyles = createUseStyles({
  personalSection: {
    width: "100%",

  },
  inputField: {
    width: "60%", // Adjusted width of the input fields
    "& input:focus": {
      borderColor: "#1976d2", // Change the focus border color to match MUI's primary color
    },
  },
});

function PersonalInfo({ setActiveTab }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formData, setFormData] = React.useState({
    employeeName: "",
    email: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = React.useState({
    employeeName: "",
    email: "",
    mobileNumber: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user types in the field
    setErrors({
      ...errors,
      [name]: "",
    });
    const filledInputsCount = Object.values(formData).filter(value => value.trim() !== "").length;
    dispatch(inputNumber(filledInputsCount));

  };

  const handleEmailBlur = (event) => {
    const { name, value } = event.target;
    if (value.trim() !== "" && name === "email" && !validateEmail(value)) {
      setErrors({
        ...errors,
        email: "Invalid email format",
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    let hasError = false;
    const newErrors = { ...errors };

    if (formData.employeeName.trim() === "") {
      newErrors.employeeName = "Employee name is required";
      hasError = true;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      hasError = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      hasError = true;
    }

    if (formData.mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile number is required";
      hasError = true;
    } else if (formData.mobileNumber.length !== 10) {
      newErrors.mobileNumber = "Mobile number should 10 digits";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }
    dispatch(employeeName(formData))
    setActiveTab(1);
    // Submit data if validation passes
    // console.log("Form submitted:", formData);
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Box className={classes.personalSection}>
      <Box
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center", // Align text fields and button in the center
          padding: "16px",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "text.primary", marginBottom: "16px" }}
        >
          Personal Information
        </Typography>
        <form noValidate onSubmit={handleSubmit} style={{ width: "100%" }}>
          <CustomTextFeild
            margin="normal"
            required
            multiline
            variant={"outlined"}
            fullWidth
            id="employeeName"
            label="Enter Employee Name"
            name="employeeName"
            autoComplete="employeeName"
            autoFocus
            value={formData.employeeName}
            onChange={handleChange}
            error={Boolean(errors.employeeName)}
            helperText={errors.employeeName}
            className={classes.inputField}
          />
          <CustomTextFeild
            margin="normal"
            multiline
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            error={Boolean(errors.email)}
            helperText={errors.email}
            className={classes.inputField}
          />
          <CustomTextFeild
            margin="normal"
            multiline
            required
            fullWidth
            id="mobileNumber"
            label="Mobile Number"
            name="mobileNumber"
            autoComplete="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={Boolean(errors.mobileNumber)}
            helperText={errors.mobileNumber}
            className={classes.inputField}
          />
          <div style={{ textAlign: "center", width: "100%" }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ marginTop: "24px", width: "60%" }}
            >
              Next
            </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
}

export default PersonalInfo;
