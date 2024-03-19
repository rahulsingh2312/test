import { Router } from "express";
import { userInfo } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/userinfo").post(upload.single("avatar"), userInfo);

export default router;
