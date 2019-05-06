import * as Express from 'express'
import * as bodyParser from 'body-parser'

import todoRouter from './routers/todo'
import healthCheckRouter from './routers/health-check'
import * as Middlewares from './middlewares'

const app = Express()

app.use(bodyParser.json())

app.use(Middlewares.accessLogger)

app.use('/todo', todoRouter)
app.use('/', healthCheckRouter)

app.use(Middlewares.internalServerErrorHandler)
app.use(Middlewares.notFoundHandler)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
