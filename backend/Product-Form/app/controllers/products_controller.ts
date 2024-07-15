import type { HttpContext } from '@adonisjs/core/http'
import Product from '../models/product.js'

export default class ProductController {
  public async store({ request, response }: HttpContext) {
    const { title, price, stock_quantity, description } = request.body()

    try {
      const product = await Product.create({
        title,
        price,
        stock_quantity,
        description,
      });
      
      return response.status(201).json({ success: true, product })
    } catch (error) {
      const message = 'Could not create new product'
      return response.status(500).json({ success: false, error: message })
    }
  }
  async fetchProducts({ response}: HttpContext){
   const products = await Product.all()
    response.json({
      success: true,
      data: products
    })
  }
}