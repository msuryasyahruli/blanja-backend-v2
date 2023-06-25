const express = require("express");
const router = express.Router();
const productRouter = require("../routes/products");
const categoryRouter = require("../routes/category");
const ordersRouter = require("../routes/orders");
const usersRouter = require("../routes/users");

router.use("/products", productRouter);
router.use("/category", categoryRouter);
router.use("/orders", ordersRouter);
router.use("/users", usersRouter);

module.exports = router;