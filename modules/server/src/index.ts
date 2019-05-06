import * as Express from 'express'
import * as bodyParser from 'body-parser'

import todoRouter from './routers/todo'
import healthCheckRouter from './routers/health-check'
import errorHandler from './handlers/error'
import notFoundHandler from './handlers/404'

const app = Express()

app.use(bodyParser.json())

app.use('/todo', todoRouter)
app.use('/', healthCheckRouter)

app.use(notFoundHandler)
app.use(errorHandler)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
