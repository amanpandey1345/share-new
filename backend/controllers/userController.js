const User = require("../models/userModel");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHander = require("../utils/errorhander");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
// const cloudinary = require('cloudinary');
// const cloudinary = require("../cloud/cloud");

// Create User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {

  const { fname, email, mobile, password ,referCode } = req.body;


    const user = await User.create({ fname, email, mobile, password , referCode ,propic:{
      url:"url",
      public_id:"public id"
    }});
  // const user = new User({ fname, email, mobile, password });


  sendToken(user, 201, res);
});

// login User

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  // checkingif user has given password and email both
  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

// logout User

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Get all User User

exports.getAllUser = catchAsyncErrors(async (req, res, next) => {
  // return next(new ErrorHander("This is My TESting Error",500))

  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Update User User

exports.updateUser = catchAsyncErrors(async (req, res) => {
  let user = await User.findById(req.params.id);
  if (!user) {
    return next(new ErrorHander("user not found", 404));
  }

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    user,
  });
});

// exports.forgotPassword

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }
  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;
  // const resetPasswordUrl = `${req.protocol}://${req.get(
  //   "host"
  // )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is  :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it `;

  try {
    await sendEmail({
      email: user.email,
      subject: `Vishnu Project Password Recovery`,
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email send to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});

// Reset Password
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHander(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHander("Password does not password", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    user,
  });
});

// exports.getProduct = (req,res)=>{
//     res.status(200).json({message:"hello vishnu bro"})
// }

// Get User Detail
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});


// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("Confirm password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});

// update balance

exports.updateBalance = catchAsyncErrors(async (req, res, next) => {


  let users = await User.findById(req.user.id);

  if (!users) {
    return next(new ErrorHander("user not found", 404));
  }


  users = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  await users.save()

  res.status(200).json({
    success: true,
    users,
  });
});






// update User Profile
exports.AdminUpdateProfile = catchAsyncErrors(async (req, res, next) => {

  let user = await User.findById(req.params.id);


    if (!user) {
      return next(new ErrorHander("notifi user not found", 404));
    }

    user = await User.findByIdAndUpdate(req.params.id,req.body ,{
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });




  res.status(200).json({
    success: true,
    user,
  });


})

// update User password
exports.pop_natifications = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new ErrorHander("User is Not Found", 400));
  }
  let notificationslen = user.notilenth;
  let bank = 0;
  user.notilenth = bank;

  await user.save();

  res.status(200).json({
    success: true,
    notificationslen
  });
});


