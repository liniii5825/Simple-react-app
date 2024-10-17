import express from "express";
import { getProducts } from "../controller/product.controller.js";
import { createProduct } from "../controller/product.controller.js";
import { putProduct } from "../controller/product.controller.js";
import { deleteProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

export default router;
