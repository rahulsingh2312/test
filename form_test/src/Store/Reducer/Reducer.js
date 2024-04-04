import { EMPLOYEE_NAME, INPUT_VALUE } from "../Action";


const initialState = {
  inputValue:0,
  employeeName:{},
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return {
        ...state,
        inputValue:action.payload
      };
  case EMPLOYEE_NAME:
    return{
      ...state,
      employeeName:action.payload
    }
    default:
      return state; // Return state as is for other actions
  }
};

export default Reducer;
