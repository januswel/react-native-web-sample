import * as Express from 'express'

export default (err: Error, _: Express.Request, res: Express.Response, __: Express.NextFunction) => {
  console.error(err.stack)
  res.status(500).send('500 Internal Server Error')
}
