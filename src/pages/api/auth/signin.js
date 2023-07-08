// Json Web Token
import { sign } from "jsonwebtoken";
// Cookie
import { serialize } from "cookie";

// Model
import User from "../../../../model/User";
// DB
import connectDB from "../../../../util/connectDB";
// Common
import { verifyPassword } from "../../../../util/common";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const userData = req.body.user;
    const { password, nationalCode } = userData;
    const secretKey = process.env.SECRET_KEY;
    const expiration = 24 * 60 * 60;

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

    const truePassword = await verifyPassword(password, isUserInDB.password);
    if (!truePassword) {
      return res.status(422).json({
        status: "Success",
        message: "رمز یا کد ملی تان صحیح نمی باشد!",
      });
    }

    const token = sign({ nationalCode }, secretKey, { expiresIn: expiration });
    const serialized = serialize("token", token, {
      httpOnly: true,
      maxAge: expiration,
      path: "/",
    });

    res.status(200).setHeader("Set-Cookie", serialized).json({
      status: "Success",
      message: "با موفقیت وارد پنل کاربری تان شدید",
      data: userData,
    });
  }
}
