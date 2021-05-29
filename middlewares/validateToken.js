const jwt = require('jsonwebtoken')

const createResponse = require('../utils/createResponse')
const constants = require('../constants')

// token is passed in headers as 'Authorization: Bearer JWT_TOKEN'
module.exports.validateToken = (req, res, next) => {
  let response = {}
  try {
    if (!req.headers.authorization) {
      throw new Error(constants.requestValidationMessages.TOKEN_MISSING)
    }
    const token = req.headers.authorization.split('Bearer')[1].trim()
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'my-secret-key')
    console.log(decoded)
    return next()
  } catch (err) {
    console.log('error at Middleware: validateToken', err)
    response = createResponse(401, err.message, {})
  }

  return res.status(response.status).send(response)
}
