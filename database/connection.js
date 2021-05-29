const mongoose = require('mongoose')

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log('Database connected successfully.')
  } catch (err) {
    console.log('Error connecting to database', err)
    throw new Error(err)
  }
}
