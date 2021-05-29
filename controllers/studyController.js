const createResponse = require('../utils/createResponse')
const constants = require('../constants')
const studyService = require('../services/studyService')

module.exports.getAllStudies = async (req, res) => {
  let response = {}
  try {
    const serviceResponse = await studyService.getAllStudies(req.query)
    response = createResponse(
      200,
      constants.studyMessages.STUDY_FETCHED,
      serviceResponse
    )
  } catch (err) {
    console.log('error at Controller: getAllStudies', err)
    response = createResponse(400, err.message, {})
  }

  return res.status(response.status).send(response)
}

module.exports.getStudyById = async (req, res) => {
  let response = {}
  try {
    const serviceResponse = await studyService.getStudyById(req.params)
    response = createResponse(
      200,
      constants.studyMessages.STUDY_FETCHED,
      serviceResponse
    )
  } catch (err) {
    console.log('error at Controller: getStudyById', err)
    response = createResponse(400, err.message, {})
  }

  return res.status(response.status).send(response)
}

module.exports.createStudy = async (req, res) => {
  let response = {}
  try {
    const serviceResponse = await studyService.createStudy(req.body)
    response = createResponse(
      200,
      constants.studyMessages.STUDY_CREATED,
      serviceResponse
    )
  } catch (err) {
    console.log('error at Controller: createStudy', err)
    response = createResponse(400, err.message, {})
  }

  return res.status(response.status).send(response)
}

module.exports.updateStudy = async (req, res) => {
  let response = {}
  try {
    const serviceResponse = await studyService.updateStudy({
      id: req.params.id,
      updateInfo: req.body,
    })
    response = createResponse(
      200,
      constants.studyMessages.STUDY_UPDATED,
      serviceResponse
    )
  } catch (err) {
    console.log('error at Controller: updateStudy', err)
    response = createResponse(400, err.message, {})
  }

  return res.status(response.status).send(response)
}

module.exports.deleteStudy = async (req, res) => {
  let response = {}
  try {
    const serviceResponse = await studyService.deleteStudy(req.params)
    response = createResponse(
      200,
      constants.studyMessages.STUDY_DELETED,
      serviceResponse
    )
  } catch (err) {
    console.log('error at Controller: deleteStudy', err)
    response = createResponse(400, err.message, {})
  }

  return res.status(response.status).send(response)
}
