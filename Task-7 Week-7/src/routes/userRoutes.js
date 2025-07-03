const express = require('express');
const {
  getAllUsers,
  getUserById,
  deleteUser,
  updateUserStatus
} = require('../controllers/userController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();

// All routes are protected and require admin access
router.use(protect);
router.use(adminOnly);

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.patch('/:id/status', updateUserStatus);

module.exports = router;