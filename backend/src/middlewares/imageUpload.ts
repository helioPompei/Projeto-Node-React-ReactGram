import multer from "multer";
import path from "path";

// Destination to store
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "";

    if (req.baseUrl.includes("users")) {
      folder = "users";
    } else if (req.baseUrl.includes("photos")) {
      folder = "photos";
    }

    cb(null, `src/uploads/${folder}/`);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Best with UUID
  },
});

export const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // Upload only png and jpg formats
      return cb(new Error("Por favor, envie apenas png ou jpg!"));
    }

    cb(null, true);
  },
});
