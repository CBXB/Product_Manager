const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/products/new', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct);
    app.put('/api/products/update/:id', ProductController.updateProduct);
    app.delete('/api/products/delete/:id', ProductController.deleteProduct);
}

