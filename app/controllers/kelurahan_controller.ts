import Wilayah from '#models/wilayah'
import type { HttpContext } from '@adonisjs/core/http'

export default class KelurahanController {
  async index({ request }: HttpContext) {
    const kecamatanId = request.param('kecamatanId')
    return await Wilayah.query().where('kode', 'like', `${kecamatanId}.____`).orderBy('nama')
  }
}
