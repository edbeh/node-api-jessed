const express = require('express')
const router = express.Router()
const studyController = require('../controllers/studyController')
const joiSchemaValidation = require('../middlewares/joiSchemaValidation')
const studySchema = require('../apiSchema/studySchema')

router.get(
  '/',
  joiSchemaValidation.validateQueryParams(studySchema.getAllStudiesSchema),
  studyController.getAllStudies
)

router.get('/:id', studyController.getStudyById)

router.post(
  '/',
  joiSchemaValidation.validateBody(studySchema.createStudySchema),
  studyController.createStudy
)

router.put(
  '/:id',
  joiSchemaValidation.validateBody(studySchema.updateStudySchema),
  studyController.updateStudy
)

router.delete('/:id', studyController.deleteStudy)

module.exports = router
