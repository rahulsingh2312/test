import useFormContext from "@/hooks/useFormContext";
import FormInputs from "./FormInputs";
import { Button } from "./ui/button";
import axios from "axios";

const Form = () => {
    const {
        page,
        setPage,
        data,
        title,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
    } = useFormContext();

    const handlePrev = () => setPage((prev) => prev - 1);

    const handleNext = () => setPage((prev) => prev + 1);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(JSON.stringify(data));
        const response = await axios.post(
            "http://localhost:3000/api/userinfo",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    };
    return (
        <div className="p-3">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl m-auto p-3 rounded-md flex flex-col gap-4 border-2 border-black mt-3"
            >
                <header className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold">{title[page]}</h2>

                    <div className="flex gap-2">
                        <Button
                            type="button"
                            className={`${prevHide}`}
                            onClick={handlePrev}
                            disabled={disablePrev}
                        >
                            Back
                        </Button>
                        <Button
                            type="button"
                            className={`${nextHide}`}
                            onClick={handleNext}
                            disabled={disableNext}
                        >
                            Next
                        </Button>

                        <Button
                            type="submit"
                            className={`${submitHide}`}
                            disabled={!canSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </header>

                <FormInputs />
            </form>
        </div>
    );
};

export default Form;
