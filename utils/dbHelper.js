const mongoose = require('mongoose')

const constants = require('../constants')

// this is used to transform response into what's defined in model
module.exports.transformMongoData = (data) => {
  if (Array.isArray(data)) {
    return data.map((doc) => {
      return doc.toObject()
    })
  }
  return data.toObject()
}

module.exports.checkIdValidity = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(constants.databaseMessages.INVALID_ID)
  }
}
