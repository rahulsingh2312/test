import React, { useState, useEffect } from 'react';
import { Box, Button, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { inputNumber } from '../../Store/Action';
import CustomTextFeild from '../common/TextFeild';
const useStyles = createUseStyles({
  personalSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop:"7%",
    flexDirection: 'column',
  },
  formContainer: {
    maxWidth: '400px',
    width: '100%',
    padding: '16px',
  },
  inputField: {
    marginTop: '10px',
    width: '100%',
    '& input:focus': {
      borderColor: '#1976d2',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%',
  },
});

function DetailInfoContainer({ setActiveTab }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    address: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    address: '',
    description: '',
  });
  const [filled, setFilled] = useState(3);

  useEffect(() => {
    const countFilled = Object.values(formData).filter(value => value.trim() !== '').length;
    setFilled(countFilled+3);
    dispatch(inputNumber(filled));
  }, [formData,filled]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user types in the field
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    let hasError = false;
    const newErrors = { ...errors };

    if (formData.address.trim() === '') {
      newErrors.address = 'Address is required';
      hasError = true;
    }

    if (formData.description.trim() === '') {
      newErrors.description = 'Description is required';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }
    setActiveTab(2);
    console.log('Form submitted:', formData);
  };

  return (
    <Box className={classes.personalSection}>
      <Box className={classes.formContainer}>
        <Typography component="h1" variant="h5" sx={{ color: 'text.primary', textAlign: 'center' }}>
          Detail Information
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <CustomTextFeild
            margin="normal"
            required
            fullWidth
            multiline
            rows={2}
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
            autoFocus
            value={formData.address}
            onChange={handleChange}
            error={Boolean(errors.address)}
            helperText={errors.address}
            className={classes.inputField}
          />
          <CustomTextFeild
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
            id="description"
            label="Describe yourself"
            name="description"
            autoComplete="description"
            value={formData.description}
            onChange={handleChange}
            error={Boolean(errors.description)}
            helperText={errors.description}
            className={classes.inputField}
          />
          <div className={classes.buttonContainer}>
            <Button onClick={() => setActiveTab(0)} variant="Standard">
              <ArrowBackIcon sx={{ marginRight: '8px' }} fontSize="small" /> Back
            </Button>
            <Button type="submit" variant="contained">
              Next <ArrowForwardIcon sx={{ marginLeft: '8px' }} fontSize="small" />
            </Button>
          </div>
        </form>
      </Box>
    </Box>
  );
}

export default DetailInfoContainer;
