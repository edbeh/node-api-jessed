const Study = require('../database/models/studyModel')
const constants = require('../constants')
const { transformMongoData, checkIdValidity } = require('../utils/dbHelper')

module.exports.getAllStudies = async ({ limit = 10 }) => {
  try {
    const response = {}
    const studies = await Study.find({}).limit(parseInt(limit))

    response.data = transformMongoData(studies)
    return response
  } catch (err) {
    console.log('error at Service: getAllStudies', err)
    throw new Error(err)
  }
}

module.exports.getStudyById = async ({ id }) => {
  try {
    checkIdValidity(id)
    const study = await Study.findById(id)
    if (!study) {
      throw new Error(constants.studyMessages.STUDY_NOT_FOUND)
    }
    return transformMongoData(study)
  } catch (err) {
    console.log('error at Service: getStudyById', err)
    throw new Error(err)
  }
}

module.exports.createStudy = async (serviceData) => {
  try {
    const study = new Study({ ...serviceData })
    const result = await study.save()
    return transformMongoData(result)
  } catch (err) {
    console.log('error at Service: createStudy', err)
    throw new Error(err)
  }
}

module.exports.updateStudy = async ({ id, updateInfo }) => {
  try {
    checkIdValidity(id)
    const study = await Study.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    })
    if (!study) {
      throw new Error(constants.studyMessages.STUDY_NOT_FOUND)
    }
    return transformMongoData(study)
  } catch (err) {
    console.log('error at Service: updateStudy', err)
    throw new Error(err)
  }
}

module.exports.deleteStudy = async ({ id }) => {
  try {
    checkIdValidity(id)
    const study = await Study.findByIdAndDelete(id)
    if (!study) {
      throw new Error(constants.studyMessages.STUDY_DELETED)
    }
    return transformMongoData(study)
  } catch (err) {
    console.log('error at Service: deleteStudy', err)
    throw new Error(err)
  }
}
