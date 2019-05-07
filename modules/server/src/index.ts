import * as Express from 'express'
import * as bodyParser from 'body-parser'

import todoRouter from './routers/todo'
import healthCheckRouter from './routers/health-check'
import * as Middlewares from './middlewares'
import CONSTANTS from './constants'
import logger from './utils/logger'

const app = Express()

app.use(bodyParser.json())

app.use(Middlewares.accessLogger)

app.use('/todo', todoRouter)
app.use('/', healthCheckRouter)

app.use(Middlewares.internalServerErrorHandler)
app.use(Middlewares.notFoundHandler)

const port = process.env.PORT || CONSTANTS.DEFAULTS.PORT

app.listen(port, () => {
  logger(`app listening on port ${port}`)
})
