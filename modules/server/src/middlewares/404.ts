import * as Express from 'express'

import logger from '../utils/logger'
import CONSTANTS from '../constants'

export default (req: Express.Request, res: Express.Response, __: Express.NextFunction) => {
  logger(`404 Not Found: ${req.url}`)
  res.sendStatus(CONSTANTS.HTTP.STATUS_CODE.NOT_FOUND)
}
