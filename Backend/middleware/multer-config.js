const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/gif": "gif",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    console.log("Salutation multer");
    console.log(file);
    let name = file.originalname.split(".")[0];
    name = name.split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    file.name = name + Date.now() + "." + extension;
    callback(null, file.name);
  },
});

module.exports = multer({ storage: storage }).single("image");
