function verifyAdmin(req, res, next) {
  const admin = JSON.parse(req.headers.admin || null);
  if (!admin) return res.status(401).json({ error: "Unauthorized" });
  req.admin = admin;
  next();
}

module.exports = verifyAdmin;
