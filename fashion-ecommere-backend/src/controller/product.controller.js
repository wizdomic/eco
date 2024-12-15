const productService = require("../services/product.service")


//function createProduct
const createProduct = async(req,res)=>{
    try{
        const createdProduct = await productService.createProduct(req.body);
        return res.status(201).send(createdProduct);
    }catch(error){
        return res.status(500).send({error: error.message});
    }
}

//function deleteProduct
const deleteProduct = async(req,res)=>{
    const productId = req.params.id;
    try{
        await productService.deleteProduct(productId);
        return res.status(204).send({message: 'Product deleted successfully'});
    }catch(error){
        return res.status(500).send({error: error.message});
    }
}


//function updateProduct
const updateProduct = async(req,res)=>{
    const productId = req.params.id;
    try{
        const updatedProduct = await productService.updateProduct(productId,req.body);
        return res.status(200).send(updatedProduct);
    }catch(error){
        return res.status(500).send({error: error.message});
    }
}

//function findProductById
const findProductById = async(req,res)=>{
    const productId = req.params.id;
    try{
        const product = await productService.findProductById(productId);
        if(!product){
            return res.status(404).send({message: 'Product not found'});
        }
        return res.status(200).send(product);
    }catch(error){
        return res.status(500).send({error: error.message});
    }
}

//function getAllProducts
const getAllProducts = async(req,res)=>{
    try{
        const products = await productService.getAllProducts(req.query);
        return res.status(200).send(products);
    }catch(error){
        return res.status(500).send({error: error.message});
    }
}

//function createMultipleProducts
const createMultipleProducts = async(req,res)=>{
    try{
        const createdProducts = await productService.createMultipleProduct(req.body);
        return res.status(201).send({message: "product created successfully", status: createdProducts});
    }catch(error){
        return res.status(500).send({error: error.message});
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    findProductById,
    getAllProducts,
    createMultipleProducts,
}