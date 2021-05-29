const mongoose = require('mongoose')

const studySchema = new mongoose.Schema(
  {
    protocol_title: String,
    status: String,
    condition: String,
    type: String,
    location: String,
  },
  {
    timestamps: true,
    toObject: {
      transform: (doc, ret, options) => {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
        return ret
      },
    },
  }
)

module.exports = mongoose.model('Study', studySchema)
