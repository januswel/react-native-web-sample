import * as Express from 'express'

export default (_req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}
