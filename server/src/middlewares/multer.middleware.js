import multer from "multer";

// multer middleware with a specific configuration
const storage = multer.diskStorage({
    // Destination function determines where to store the uploaded files
    destination: function (req, file, cb) {
        cb(null, "./public/temp");
    },
    // Filename function determines the name of the uploaded files
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

export const upload = multer({
    storage,
});
