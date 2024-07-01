import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Wilayah extends BaseModel {
  static table = 'wilayah'
  static primaryKey = 'kode'

  @column({ isPrimary: true })
  declare kode: string

  @column()
  declare nama: string
}
