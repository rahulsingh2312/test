import { Box, TextField } from "@mui/material";
import React from "react";

function CustomTextFeild({
  label,
  variant,
  type,
  margin,
  required,
  id,
  name,
  autoComplete,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  className,
  multiline,
  rows
}) {
  return (
    <Box>
      <TextField label={label} variant={variant} type={type} margin={margin} required={required} id={id} name={name} autoComplete={autoComplete} value={value} onChange={onChange} onBlur={onBlur} className={className} helperText={helperText} error={error}     multiline={multiline} rows={rows}/>
    </Box>
  );
}

export default CustomTextFeild;
