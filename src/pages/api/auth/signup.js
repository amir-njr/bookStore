import User from "../../../../model/User";
import { hashPassword } from "../../../../util/common";
import connectDB from "../../../../util/connectDB";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const userData = req.body.user;
    const { name, lastName, email, password } = userData;

    if (!name || !lastName || !email || !password) {
      return res
        .status(422)
        .json({ status: "Failed", message: "Invalid Data!!!" });
    }

    const isUserInDB = await User.findOne({ email: email });
    if (isUserInDB) {
      return res
        .status(422)
        .json({ status: "Failed", message: "قبلا ثبت نام کرده اید!" });
    }

    const hashedPassword = await hashPassword(password);
    userData.password = hashedPassword;

    const newUser = await User.create(userData);
    res
      .status(201)
      .json({ status: "Success", message: "ثبت نام با موفقیت انجام شد" });
  }
}
