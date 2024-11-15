import express from "express"

const router=express.Router();
import { getProduct, updateProduct,createProduct,deleteProduct  } from "../controllers/product.controllers.js";

router.get("/",getProduct);

router.post("/", createProduct);

router.put("/:id",updateProduct)

router.delete("/:id", deleteProduct);
export default router;