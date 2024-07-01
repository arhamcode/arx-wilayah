import Wilayah from '#models/wilayah'
import type { HttpContext } from '@adonisjs/core/http'

export default class KecamatanController {
  async index({ request }: HttpContext) {
    const kabupatenId = request.param('kabupatenId')
    return await Wilayah.query().where('kode', 'like', `${kabupatenId}.__`).orderBy('nama')
  }
}
