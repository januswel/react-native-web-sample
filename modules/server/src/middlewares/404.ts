import * as Express from 'express'

export default (req: Express.Request, res: Express.Response, __: Express.NextFunction) => {
  console.error(`404 Not Found: ${req.url}`)
  res.status(404).send('404 Not Found')
}
