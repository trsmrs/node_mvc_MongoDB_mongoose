const Products = require('../models/Product')


module.exports = class ProductController {
    static async showProducts(req, res) {
        const products = await Products.find().lean()

        res.render('products/all', { products })
    }

    static createProduct(re, res) {
        res.render('products/create')
    }

    static async createProductPost(req, res) {
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image

        const product = new Products({ name, price, description, image })

        await product.save()

        res.redirect('/products')
    }

    static async showProduct(req, res) {
        const id = req.params.id


        const product = await Products.findById(id).lean()
        res.render('products/product', { product })
    }

    static async removeProduct(req, res) {
        const id = req.params.id

        await Products.deleteOne({ _id: id })
        res.redirect('/products')
    }

    static async editProduct(req, res) {
        const id = req.params.id

        const product = await Products.findById(id).lean()

        res.render('products/edit', { product })
    }

    static async editProductPost(req, res) {
        const id = req.body.id
        const name = req.body.name
        const price = req.body.price
        const description = req.body.description
        const image = req.body.image

        const product = { name, price, description, image }

        await Products.updateOne({ _id: id }, product)


        res.redirect('/products')
    }
}