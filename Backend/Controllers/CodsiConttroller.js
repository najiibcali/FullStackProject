const Codsi = require("../Model/Codsi")

// ✅ Create Codsi
const createCodsi = async (req, res) => {
    try {
        const newCodsi = new Codsi(req.body)
        await newCodsi.save()
        res.status(201).json(newCodsi)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// ✅ Read All Codsi
const getAllCodsi = async (req, res) => {
    try {
        const codsiyo = await Codsi.find()
        res.status(200).json(codsiyo)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// ✅ Read One Codsi (by ID)
const getCodsiById = async (req, res) => {
    try {
        const codsi = await Codsi.findById(req.params.id)
        if (!codsi) return res.status(404).json({ message: "Codsi not found" })
        res.status(200).json(codsi)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// ✅ Delete Codsi (by ID)
const deleteCodsi = async (req, res) => {
    try {
        const codsi = await Codsi.findByIdAndDelete(req.params.id)
        if (!codsi) return res.status(404).json({ message: "Codsi not found" })
        res.status(200).json({ message: "Codsi deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { createCodsi, getAllCodsi, getCodsiById, deleteCodsi}
