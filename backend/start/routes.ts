
import router from '@adonisjs/core/services/router'

const ProductController = () => import('#controllers/products_controller');

router.post('/products', [ProductController, 'store']);
router.get('/products', [ProductController, 'fetchProducts']);