const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");
// @desc GET all Products from DB
// @route Get /api/products
// @access Public
router.get("/", getAllProducts);

// @desc GET aa Product by id from DB
// @route Get /api/products/:id
// @access Public
router.get("/:id", getProductById);

module.exports = router;
