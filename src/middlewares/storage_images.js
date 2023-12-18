/* eslint-disable consistent-return */
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (_req, file, cb) => {
    cb(null, path.join(__dirname, '../images'));
  },
  filename: (_req, file, cb) => {
    const date = Date.now();
    const filename = `${date}${path.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const upload = multer({ storage }).single('image');

export default (req, res, next) => {
  try {
    upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ errors: [`[STORAGEIMAGES]${err.message}`] });
      }

      // Check if req.file is defined
      if (!req.file) {
        return res.status(400).json({ errors: ['No file uploaded'] });
      }

      // If upload is successful, set the imagePath in the request object
      req.imagePath = path.join('/images', req.file.filename);

      next();
    });
  } catch (e) {
    return res.status(500).json({ errors: [`[STORAGEIMAGES]${e.message}`] });
  }
};
