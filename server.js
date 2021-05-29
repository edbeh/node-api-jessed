const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const dbConnection = require('./database/connection')

// will be used when protecting routes
// const validateToken = require('./middlewares/validateToken')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const app = express()

// connect to db
dbConnection()

// cors middleware
app.use(cors())

// request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/v1/study', require('./routes/studyRoutes'))

// api documentation
const swaggerDocument = YAML.load('./swagger.yaml')
if (process.env.NODE_ENV !== 'production') {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

// error handling global middleware
app.use(function (err, req, res, next) {
  console.error(err.stack)
  return res.status(500).send({
    error: 500,
    message: err.message,
    body: {},
  })
})
