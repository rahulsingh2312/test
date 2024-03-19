import useFormContext from "@/hooks/useFormContext";
import { Input } from "./ui/input";

// Second Level of form
const AdditionalInfo = () => {
    const { data, handleChange } = useFormContext();

    return (
        <div className="flex flex-col gap-2 w-full">
            <div>
                <label htmlFor="infoAddress">Address</label>
                <Input
                    type="text"
                    id="infoAddress"
                    name="infoAddress"
                    placeholder="Borivali East, Mumbai"
                    value={data.infoAddress}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="infoCity">City</label>
                <Input
                    type="text"
                    id="infoCity"
                    name="infoCity"
                    placeholder="Mumbai"
                    value={data.infoCity}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="infoNumber">Phone Number</label>
                <Input
                    type="number"
                    id="infoNumber"
                    name="infoNumber"
                    placeholder="8374627323"
                    value={data.infoNumber}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default AdditionalInfo;
