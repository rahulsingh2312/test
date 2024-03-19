import useFormContext from "@/hooks/useFormContext";
import { Input } from "./ui/input";

// First form
const UserInfo = () => {
    const { data, handleChange } = useFormContext();

    return (
        <div className="flex flex-col gap-2 w-full">
            <div>
                <label htmlFor="userFirstName">First Name</label>
                <Input
                    type="text"
                    id="userFirstName"
                    name="userFirstName"
                    placeholder="John"
                    value={data.userFirstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="userLastName">Last Name</label>
                <Input
                    type="text"
                    id="userLastName"
                    name="userLastName"
                    placeholder="Doe"
                    value={data.userLastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="userEmail">Email</label>
                <Input
                    type="email"
                    id="userEmail"
                    name="userEmail"
                    placeholder="Johndoi@gmail.com"
                    value={data.userEmail}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default UserInfo;
