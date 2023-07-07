import User from "../../../../model/User";
import connectDB from "../../../../util/connectDB";
import {  verifyPassword } from "../../../../util/common";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const userData = req.body.user;
    const { password, nationalCode } = userData;

    if (!password || !nationalCode) {
      return res
        .status(422)
        .json({ status: "Failed", message: "Invalid Data!!!" });
    }

    const isUserInDB = await User.findOne({ nationalCode: nationalCode });
    if (!isUserInDB) {
      return res
        .status(422)
        .json({ status: "Failed", message: "شما ثبت نام نکرده اید!" });
    }

    const truePassword = await verifyPassword(password , isUserInDB.password)
    if(truePassword) {
        return res
        .status(200)
        .json({ status: "Success", message: "با موفقیت وارد شدید" });
    } else {
        return res
        .status(422)
        .json({ status: "Success", message: "رمز یا کد ملی تان صحیح نمی باشد!" });
    }
  }
}
