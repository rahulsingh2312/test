import { useContext } from "react";
import FormContext from "@/context/FormContext";

// using the context
const useFormContext = () => {
    return useContext(FormContext);
};

export default useFormContext;
