import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

import { prisma } from "../app.js";

const userInfo = asyncHandler(async (req, res) => {
    //  getting user details from fronted
    const {
        userFirstName,
        userLastName,
        userEmail,
        infoAddress,
        infoCity,
        infoNumber,
        name,
    } = req.body;

    // validation - not empty
    if (
        [
            userFirstName,
            userLastName,
            userEmail,
            infoAddress,
            infoCity,
            infoNumber,
            name,
        ].some((field) => field.trim() === "")
    ) {
        throw new ApiError(400, "Please fill the all required field.");
    }

    // check for avatar is provided or not
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is missing.");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    console.log(avatar, avatarLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required");
    }

    if (!avatar.url) {
        throw new ApiError(400, "Error while uploading avatar.");
    }

    // create user object - create entry in db
    const user = await prisma.user.create({
        data: {
            userFirstName,
            userLastName,
            userEmail,
            infoAddress,
            infoCity,
            infoNumber: Number(infoNumber),
            avatar: avatar.url,
            name,
        },
    });

    // return response
    return res
        .status(201)
        .json(new ApiResponse(200, user, "Userinfo created successfully."));
});

export { userInfo };
