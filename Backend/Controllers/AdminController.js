const Admin = require("../Model/AdminModel");

// Create new admin (used once or by super-admin)
exports.createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) return res.status(400).json({ error: "Admin already exists" });

        const admin = new Admin({ name, email, password });
        await admin.save();
        res.status(201).json({ message: "Admin created successfully", admin });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};

// Admin login
exports.loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email, password });
        if (!admin) return res.status(401).json({ error: "Invalid credentials" });
        res.json({ admin });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
};
