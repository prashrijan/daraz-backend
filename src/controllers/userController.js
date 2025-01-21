import { User } from "../model/userModel.js";

const registerUser = async (req, res) => {
  try {
    const { userName, email, phoneNumber, password } = req.body;

    if (!userName || !email || !phoneNumber || !password) {
      return res.status(400).json({
        status: "failed",
        message: "All fields are required.",
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

export { registerUser };
