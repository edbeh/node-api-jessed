const Joi = require('@hapi/joi')

const createResponse = require('../utils/createResponse')
const constants = require('../constants')

const validateObjectSchema = (data, schema) => {
  const result = Joi.validate(data, schema)
  if (result.error) {
    const errorDetails = result.error.details.map((item) => {
      return {
        error: item.message,
        path: item.path,
      }
    })
    return errorDetails
  }
  return null
}

module.exports.validateQueryParams = (schema) => {
  return (req, res, next) => {
    let response = {}
    const error = validateObjectSchema(req.query, schema)
    if (error) {
      console.log('error at joiSchemaValidation:', error)
      response = createResponse(
        400,
        constants.requestValidationMessages.BAD_REQUEST,
        error
      )
      return res.status(response.status).send(response)
    }
    next()
  }
}

module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    let response = {}
    const error = validateObjectSchema(req.body, schema)
    if (error) {
      console.log('error at joiSchemaValidation:', error)
      response = createResponse(
        400,
        constants.requestValidationMessages.BAD_REQUEST,
        error
      )
      return res.status(response.status).send(response)
    }
    next()
  }
}
