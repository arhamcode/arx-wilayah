/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/provinsi', '#controllers/provinsi_controller.index')
router.get('/kabupaten/:provinsiId', '#controllers/kabupaten_controller.index')
router.get('/kecamatan/:kabupatenId', '#controllers/kecamatan_controller.index')
router.get('/kelurahan/:kecamatanId', '#controllers/kelurahan_controller.index')
