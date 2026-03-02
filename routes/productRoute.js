import { addProduct, showProducts, deleteProduct, updateProduct } from "../controllers/productController.js"
import express from 'express'

const productRouter = express.Router()

productRouter.get("/", showProducts)
productRouter.post("/", addProduct)
productRouter.delete("/:id", deleteProduct)
productRouter.patch("/:id", updateProduct)

export default productRouter