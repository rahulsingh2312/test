import useFormContext from "@/hooks/useFormContext";
import { useMemo } from "react";

const ProgressBar = () => {
    const { page, title } = useFormContext();

    return useMemo(() => {
        const interval = 100 / Object.keys(title).length;

        const progress = ((page + 1) * interval).toFixed(2);

        const steps = Object.keys(title).map((step, i) => {
            return (
                <div
                    key={i}
                    className="w-full grid place-content-center border-r border-black border-solid last:border-none "
                >
                    Step {i + 1}
                </div>
            );
        });

        return (
            <div className="p-3">
                <section className="w-full max-w-xl m-auto p-4 border-2 border-black mt-5 rounded-md relative">
                    <div className="flex justify-around">{steps}</div>
                    <progress
                        className="w-full h-8 appearance-none mt-1.5 progress"
                        max="100"
                        value={progress}
                    ></progress>
                </section>
            </div>
        );
    }, [page, title]);
};

export default ProgressBar;
