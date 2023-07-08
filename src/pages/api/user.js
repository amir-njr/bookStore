import { verifyToken } from "../../../util/common";

export default async function handler(req, res) {
  if (req.method !== "GET") return;
  const { token } = req.cookies;
  const secretKey = process.env.SECRET_KEY;
  
  if (!token) {
    return res.status(401).json({
      status: "Failed",
      message: "شما هنوز وارد پنل کاربری تان نشده اید!",
    });
  }

  const result = verifyToken(token, secretKey);
  if (result) {
    res.status(200).json({ status: "Success", data: result });
  }
}
