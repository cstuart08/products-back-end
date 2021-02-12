module.exports = {
    getAllProducts: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then(products => {
            res.status(200).send(products)
        }).catch(error => {
            console.log(error)
            res.status(500).send("An error has ocurred fetching all products.")
        })
    },
    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.read_product([id]).then(product => {
            if (product.length) {
                res.status(200).send(product)
            } else {
                console.log("The server returned an empty array.")
                res.status(500).send("An error has ocurred fetching a product.")
            }
        }).catch(error => {
            console.log(error)
            res.status(500).send("An error has ocurred fetching a product.")
        })
    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        db.create_product([name, description, price, image_url]).then(products => {
            res.status(200).send(products)
        }).catch(error => {
            console.log(error)
            res.status(500).send("An error has ocurred updating a product.")
        })
    },
    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {description} = req.body
        db.update_product([id, description]).then(product => {
            if (product.length) {
                res.status(200).send(product)
            } else {
                console.log("The server returned an empty array.")
                res.status(500).send("An error has ocurred updating a product.")
            }
        }).catch(error => {
            console.log(error)
            res.status(500).send("An error has ocurred updating a product.")
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product([id]).then(products => {
            res.status(200).send(products)
        }).catch(error => {
            console.log(error)
            res.status(500).send("An error has ocurred updating a product.")
        })
    }
}