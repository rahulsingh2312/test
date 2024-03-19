import { createContext, useState } from "react";

// Created the form context
const FormContext = createContext({});

const title = {
    0: "User Info",
    1: "Additional Info",
    2: "Upload Image",
};

// created a provider
export const FormProvider = ({ children }) => {
    const [page, setPage] = useState(0);

    // all input data store in useState
    const [data, setData] = useState({
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        infoAddress: "",
        infoCity: "",
        infoNumber: "",
        avatar: null,
        name: "",
    });

    // handle change for for the inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "avatar") {
            setData((pd) => ({
                ...pd,
                [name]: e.target.files[0],
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    // Checking the all form inputs are filled with value or not.
    let canSubmit;
    if (page === Object.keys(title).length - 1) {
        const { ...requiredInputs } = data;

        canSubmit = [...Object.values(requiredInputs)].every(Boolean);
    }

    const canNextPage1 = Object.keys(data)
        .filter((key) => key.startsWith("user"))
        .map((key) => data[key])
        .every(Boolean);

    const canNextPage2 = Object.keys(data)
        .filter((key) => key.startsWith("info"))
        .map((key) => data[key])
        .every(Boolean);

    const disablePrev = page === 0;

    const disableNext =
        page === Object.keys(title).length - 1 ||
        (page === 0 && !canNextPage1) ||
        (page === 1 && !canNextPage2);

    // hidding the buttons based on page number
    const prevHide = page === 0 && "hidden";

    const nextHide = page === Object.keys(title).length - 1 && "hidden";

    const submitHide = page !== Object.keys(title).length - 1 && "hidden";

    return (
        <FormContext.Provider
            value={{
                title,
                page,
                setPage,
                data,
                setData,
                canSubmit,
                handleChange,
                disablePrev,
                disableNext,
                prevHide,
                nextHide,
                submitHide,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormContext;
