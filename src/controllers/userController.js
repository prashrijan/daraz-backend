import { User } from "../model/userModel.js";

// Registering User
const registerUser = async (req, res) => {
  try {
    const { userName, email, phoneNumber, password } = req.body;

    if (!userName || !email || !phoneNumber || !password) {
      return res.status(400).json({
        status: "failed",
        message: "All fields are required.",
      });
    }

    const existedUser = await User.findOne({
      $or: [{ email }, { userName }, { phoneNumber }],
    });

    if (existedUser) {
      return res.status(400).json({
        status: "failed",
        message: "User with this email or username already exists.",
      });
    }

    const user = await User.create({
      userName,
      email,
      phoneNumber,
      password,
    });

    return res.status(201).json({
      stauts: "success",
      message: "User created successfully.",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      message: "Error registering the user.",
      error,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "failed",
      message: "All fields are required.",
    });
  }
};

export { registerUser };
