import Wilayah from '#models/wilayah'
import { HttpContext } from '@adonisjs/core/http'

export default class KabupatenController {
  async index({ request }: HttpContext) {
    const provinsiId = request.param('provinsiId')
    return await Wilayah.query().where('kode', 'like', `${provinsiId}.__`).orderBy('nama')
  }
}
