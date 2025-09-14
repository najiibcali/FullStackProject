const express = require("express");
const router = express.Router();
const { createAdmin, loginAdmin } = require("../Controllers/AdminController");
const verifyAdmin = require("../Middleware/Admin");

// Create admin (POST request)
router.post("/admin/create", createAdmin);

// Admin login
router.post("/admin/login", loginAdmin);

// Protected dashboard
router.get("/admin/dashboard", verifyAdmin, (req, res) => {
    res.json({ message: "Welcome to Admin Dashboard" });
});

module.exports = router;
