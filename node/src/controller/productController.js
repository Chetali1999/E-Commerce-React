const Product = require('../models/productModel')

exports.createProduct = async (req, res) => {
    try {
        const productDetails = {
            productName,
            brand,
            quantity,
            price,
            image
        } = req.body;

        if (!productDetails) {
            return res.status(400).json({ message: 'please provide product Details' });
        }
        const product = await Product.create(productDetails)

        res.status(201).json({ message: 'product created successfully', data: product });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.getProduct = async (req, res) => {
    try {
        const prodId = req.params.prodId

        if (!prodId) {
            return res.status(400).json({ message: 'please provide valid product ID' });
        }
        const productInfo = await Product.findById(prodId).lean();
        if (!productInfo) {
            return res.status(400).json({ message: 'Provided product is inactive' });
        }
        res.status(201).json({ message: 'product fetched successfully', data: productInfo });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.getAllProducts = async (req, res) => {
    try {

        const productInfo = await Product.find({}).lean();
        if (!productInfo) {
            return res.status(400).json({ message: 'products are not created' });
        }
        res.status(201).json({ message: 'product fetched successfully', data: productInfo });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.deleteProduct = async (req, res) => {
    try {
        const prodId = req.params.prodId

        if (!prodId) {
            return res.status(400).json({ message: 'please provide valid product ID' });
        }
        const productInfo = await Product.findByIdAndDelete(prodId).lean();

        res.status(201).json({ message: 'product deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};
