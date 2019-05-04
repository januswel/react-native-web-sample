import * as Express from 'express'

const app = Express()

app.use((err: Error, _: Express.Request, res: Express.Response, __: Express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Internal Server Error')
})

app.get('/', (_: Express.Request, res: Express.Response) => {
  res.send('Hello World!')
})

app.use((err: Error, _: Express.Request, res: Express.Response, __: Express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('500 Internal Server Error')
})

app.use((_: Express.Request, res: Express.Response, __: Express.NextFunction) => {
  res.status(404).send('404 Not Found')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
