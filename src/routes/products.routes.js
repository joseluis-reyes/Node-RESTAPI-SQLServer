import {Router} from 'express'
import {createNewProduct, getProductById, getProducts,
        deleteProduct, getTotalProducts, updateProductById}
        from '../controllers/products.controller'
const router = Router()

router.get('/products', getProducts)
router.post('/products', createNewProduct)
router.get('/products/count', getTotalProducts)
router.get('/products/:id', getProductById)
router.delete('/products/:id', deleteProduct)
router.put('/products/:id', updateProductById)
/*router.get('/products', getProducts)
router.put('/products', getProducts)*/

export default router