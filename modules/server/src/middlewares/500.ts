import * as Express from 'express'

import logger from '../utils/logger'
import CONSTANTS from '../constants'

export default (err: Error, _: Express.Request, res: Express.Response, __: Express.NextFunction) => {
  logger(err.stack)
  res.sendStatus(CONSTANTS.HTTP.STATUS_CODE.INTERNAL_SERVER_ERROR)
}
