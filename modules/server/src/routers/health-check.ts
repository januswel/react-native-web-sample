import * as Express from 'express'

import CONSTANTS from '../constants'

const router = Express.Router()

router.get('/', (_: Express.Request, res: Express.Response) => {
  res.send(CONSTANTS.HTTP.STATUS_CODE.OK)
})

export default router
