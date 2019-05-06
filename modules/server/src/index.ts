import * as Express from 'express'

import todoRouter from './routers/todo'
import errorHandler from './handlers/error'
import notFoundHandler from './handlers/404'

const app = Express()

app.use('/todo', todoRouter)

app.get('/', (_: Express.Request, res: Express.Response) => {
  res.send('Hello World!')
})

app.use(notFoundHandler)
app.use(errorHandler)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
