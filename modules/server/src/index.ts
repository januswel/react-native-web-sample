import * as Express from 'express'

import errorHandler from './handlers/error'
import notFoundHandler from './handlers/404'

const app = Express()

app.get('/', (_: Express.Request, res: Express.Response) => {
  res.send('Hello World!')
})

app.use(notFoundHandler)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
