import bookData from "@/components/shared/bookData/bookData";
export default function handler(req, res) {
  res.status(200).json(bookData);
}
