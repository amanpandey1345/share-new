const express = require("express");

const {
  getAllUser,
  updateUser,
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateBalance,
  pop_natifications,
  AdminUpdateProfile,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
// const isAuthenticatedUser = require("../middleware/auth");
// const multer = require("../middleware/multer");

const router = express.Router();

router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser);
router.route("/register").post( registerUser);
router.route("/user/update/:id").put(isAuthenticatedUser, updateUser);
router.route("/login").post(loginUser);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/balance/update").put(isAuthenticatedUser, updateBalance);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/logout").get(logoutUser);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/me/notifi").put(isAuthenticatedUser, pop_natifications);
router.route("/admin/user/update/:id").put(isAuthenticatedUser,authorizeRoles("admin"),AdminUpdateProfile);

module.exports = router;
