import React, { useEffect, useState } from "react";
import "../App.css"; // You can define your CSS styles in App.css
import { useDispatch, useSelector } from "react-redux";
import { inputNumber } from "../Store/Action";

function DataIndicater() {
  const data =useSelector(state=>state.Reducer.inputValue);
  const dispatch =useDispatch()
    const [filledFields, setFilledFields] = useState(0);

    // Total number of input fields in the form
    const totalFields = 8; // Adjust this according to your form
  
    // Calculate the percentage completed
    const percentage = (filledFields / totalFields) * 100;
  
    // Function to handle input field change
   useEffect(()=>{
    setFilledFields(data)
   },[data])
  

  return (
    <>
    <div className="progress-container">
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
    </div>
    <div className="progress-label">{Math.round(percentage)}%</div>
  </div>
    </>
  );
}

export default DataIndicater;
