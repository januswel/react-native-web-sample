import * as Express from 'express'

export default (req: Express.Request, _: Express.Response, next: Express.NextFunction) => {
  const { body } = req
  const serializedBody = Object.keys(body).length !== 0 ? JSON.stringify(body) : ''
  console.log(`${req.method} ${req.url} ${serializedBody}`)
  next()
}
