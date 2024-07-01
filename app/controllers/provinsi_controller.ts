import Wilayah from '#models/wilayah'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProvinsiController {
  async index({ request }: HttpContext) {
    // async index() {
    const query = request.qs()
    const search = query['search'] ?? ''
    return await Wilayah.query()
      .where('kode', 'like', '__')
      .andWhere('nama', 'like', `%${search}%`)
      .orderBy('nama')
  }
}
