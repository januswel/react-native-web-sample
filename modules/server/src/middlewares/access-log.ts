import * as Express from 'express'
import logger from '../utils/logger'

export default (req: Express.Request, _: Express.Response, next: Express.NextFunction) => {
  const { body } = req
  const serializedBody = Object.keys(body).length !== 0 ? JSON.stringify(body) : ''
  logger.info(`${req.method} ${req.url} ${serializedBody}`)
  next()
}
