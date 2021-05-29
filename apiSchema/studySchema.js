// Schema files are used in conjunction with Joi validation middlewares

const Joi = require('@hapi/joi')

module.exports.getAllStudiesSchema = Joi.object().keys({
  limit: Joi.string(),
  protocol_title: Joi.string(),
  status: Joi.string(),
  type: Joi.string(),
  condition: Joi.string(),
  location: Joi.string(),
})

module.exports.createStudySchema = Joi.object().keys({
  protocol_title: Joi.string().required(),
  status: Joi.string().required(),
  condition: Joi.string().required(),
  type: Joi.string().required(),
  location: Joi.string().required(),
})

module.exports.updateStudySchema = Joi.object().keys({
  protocol_title: Joi.string(),
  status: Joi.string(),
  condition: Joi.string(),
  type: Joi.string(),
  location: Joi.string(),
})
