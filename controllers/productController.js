import productModel from "../models/productModel.js";

const addProduct = async (req, res) => {
    const body = req.body
    const result = await productModel.create(body)
    res.json(result)
}

const showProducts = async (req, res) => {
    const result = await productModel.find()
    res.json(result)
}

const deleteProduct = async (req, res) => {
    const id = req.params.id
    const result = await productModel.findByIdAndDelete(id)
    res.json(result)
}

const updateProduct = async (req, res) => {
    const id = req.params.id
    const product = req.body
    await productModel.findByIdAndUpdate(id.product)
    res.status(200).json(product)
}

export { addProduct, showProducts, deleteProduct, updateProduct }