export default function tokenProvider(req, res) {
  res.status(200).json({ token: process.env.ARDA });
}
