// Your server-side code
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

app.post(
  "/submit-data",
  upload.single("document"), // Use single() since it's a single file upload
  async (req: Request, res: Response) => {
    try {
      const { email, password, firstName, lastName, username, nationality } =
        req.body;

      const documentFile = req.file; // Access uploaded file through req.file

      console.log("document file: ", documentFile);

      const user = await prisma.user.create({
        data: {
          email,
          password,
          firstname: firstName,
          lastname: lastName,
          username,
          nationality,
          document: documentFile ? documentFile.filename : null,
        },
      });

      return res.send(user);
    } catch (error) {
      return res.json(error);
    }
  }
);

app.listen(8080, () => {
  console.log(`Server is running at port ${8080}`);
});
