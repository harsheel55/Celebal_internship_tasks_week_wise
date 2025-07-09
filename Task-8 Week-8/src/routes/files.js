const express = require('express');
const upload = require('../middleware/upload');
const { uploadFile, getFiles, deleteFile } = require('../controllers/fileController');

const router = express.Router();

router.post('/upload', upload.single('file'), uploadFile);
router.get('/', getFiles);
router.delete('/:filename', deleteFile);

module.exports = router;