import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { createUseStyles } from 'react-jss';
import { useDispatch } from 'react-redux';
import { inputNumber } from '../../Store/Action';

const useStyles = createUseStyles({
  formContainer: {
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  inputField: {
    marginTop: '8px',
    width: '80%',
  },
  buttonContainer: {
    width: '80%',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

function DocumentContainer({ setActiveTab }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    photo: '',
    // adharCard: '',
    // panCard: '',
    offerLetter: '',
    proofID:'',
  });
  const [errors, setErrors] = useState({
    photo: '',
    // adharCard: '',
    // panCard: '',
    offerLetter: '',
    proofID:'',
  });
  const [filled, setFilled] = useState(6);

  const handleChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0], // Only taking the first file for simplicity
    });
    setErrors({
      ...errors,
      [name]: '', // Clear error message
    });

    const countFilled = Object.values(formData).filter(value => value !== '').length;
    setFilled(countFilled + 6);
    dispatch(inputNumber(countFilled + 6));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;
    const newErrors = { ...errors };
  
    // Validation
    if (!formData.photo) {
      newErrors.photo = 'Please upload your photo';
      hasError = true;
    }
    if (!formData.offerLetter) {
      newErrors.offerLetter = 'Please upload your Offer Letter';
      hasError = true;
    }
    if (!formData.proofID) {
      newErrors.proofID = 'Please upload your proof';
      hasError = true;
    }
    // Set errors and return if there are errors
    if (hasError) {
      setErrors(newErrors);
      return;
    }
  
    // If no errors, proceed to set active tab
    setActiveTab(3);


    setTimeout(()=>{
      localStorage.clear();
      setActiveTab(0);
      window.location.reload();
    }, 3000)  
  };

  
  return (
    <Box className={classes.formContainer}>
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
        Upload Documents
      </Typography>
      <form noValidate onSubmit={handleSubmit}>
        <Typography variant='h6' className={classes.text}>Upload Employee Photo</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          type="file"
          id="photo"
          name="photo"
          onChange={handleChange}
          error={Boolean(errors.photo)}
          helperText={errors.photo}
          className={classes.inputField}
        />
        {/* <Typography variant='h6' className={classes.text}>Upload id proof (pan card/ adharCard)</Typography> */}
        {/* <TextField
          margin="normal"
          required
          fullWidth
          type="file"
          id="adharCard"
          name="adharCard"
          onChange={handleChange}
          error={Boolean(errors.adharCard)}
          helperText={errors.adharCard}
          className={classes.inputField}
        /> */}
        <Typography variant='h6' className={classes.text}>Upload Employee OfferLetter</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          type="file"
          id="offerLetter"
          name="offerLetter"
          onChange={handleChange}
          error={Boolean(errors.offerLetter)}
          helperText={errors.offerLetter}
          className={classes.inputField}
        />
         <Typography variant='h6' className={classes.text}>Upload id proof (pan card/ adharCard)</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          type="file"
          id="proofID"
          name="proofID"
          onChange={handleChange}
          error={Boolean(errors.proofID)}
          helperText={errors.proofID}
          className={classes.inputField}
        />
        <div className={classes.buttonContainer}>
          <Button variant="standard" onClick={() => setActiveTab(1)}>
            Back
          </Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </Box>
  );
}

export default DocumentContainer;
