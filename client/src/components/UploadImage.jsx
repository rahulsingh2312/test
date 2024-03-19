import useFormContext from "@/hooks/useFormContext";
import { Input } from "./ui/input";

// Third form
const UploadImage = () => {
    const { data, handleChange } = useFormContext();
    return (
        <div className="flex flex-col gap-2 w-full">
            <div>
                <label htmlFor="avatar">Your Image</label>
                <Input
                    type="file"
                    accept="image/*"
                    id="avatar"
                    name="avatar"
                    placeholder="Upload Image"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="name">Username</label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Username"
                    value={data.name}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default UploadImage;
