import bookData from "@/components/shared/bookData/bookData";
export default function handler(req, res) {
  console.log(req.query);
  if (req.query?.id) {
    const result = bookData.filter((item) => item.id === req.query.id);
    res.status(200).json(result);
  } else {
    res.status(200).json(bookData);
  }
}
