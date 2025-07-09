const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

const uploadFile = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file uploaded'
      });
    }

    const fileInfo = {
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
      uploadDate: new Date().toISOString(),
      url: `/uploads/${req.file.filename}`
    };

    logger.info(`File uploaded: ${req.file.filename}`);

    res.status(201).json({
      success: true,
      message: 'File uploaded successfully',
      data: fileInfo
    });
  } catch (error) {
    next(error);
  }
};

const getFiles = async (req, res, next) => {
  try {
    const uploadDir = process.env.UPLOAD_DIR || 'uploads';
    const files = fs.readdirSync(uploadDir).map(filename => {
      const filePath = path.join(uploadDir, filename);
      const stats = fs.statSync(filePath);
      
      return {
        filename,
        size: stats.size,
        uploadDate: stats.birthtime,
        url: `/uploads/${filename}`
      };
    });

    res.json({
      success: true,
      data: files
    });
  } catch (error) {
    next(error);
  }
};

const deleteFile = async (req, res, next) => {
  try {
    const { filename } = req.params;
    const uploadDir = process.env.UPLOAD_DIR || 'uploads';
    const filePath = path.join(uploadDir, filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        error: 'File not found'
      });
    }

    fs.unlinkSync(filePath);
    logger.info(`File deleted: ${filename}`);

    res.json({
      success: true,
      message: 'File deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadFile,
  getFiles,
  deleteFile
};