import { BaseSchema } from '@adonisjs/lucid/schema'
export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title').notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.integer('stock_quantity').notNullable()
      table.text('description').notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}