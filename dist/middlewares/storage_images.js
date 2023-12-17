"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

const storage = _multer2.default.diskStorage({
  destination: (_req, file, cb) => {
    cb(null, _path2.default.join(__dirname, './images'));
  },
  filename: (_req, file, cb) => {
    const date = Date.now();
    const filename = `${date}${_path2.default.extname(file.originalname)}`;
    cb(null, filename);
  },
});

const upload = _multer2.default.call(void 0, { storage }).single('image');

exports. default = (req, res, next) => {
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
      req.imagePath = _path2.default.join('/images', req.file.filename);

      next();
    });
  } catch (e) {
    return res.status(500).json({ errors: [`[STORAGEIMAGES]${e.message}`] });
  }
};
