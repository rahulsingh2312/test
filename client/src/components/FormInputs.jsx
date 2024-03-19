import UserInfo from "./UserInfo";
import AdditionalInfo from "./AdditionalInfo";
import UploadImage from "./UploadImage";
import useFormContext from "@/hooks/useFormContext";

const FormInputs = () => {
    const { page } = useFormContext();

    const display = {
        0: <UserInfo />,
        1: <AdditionalInfo />,
        2: <UploadImage />,
    };

    // render the all three form
    return <div className="flex flex-col w-full">{display[page]}</div>;
};

export default FormInputs;
