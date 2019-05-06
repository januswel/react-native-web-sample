import * as Express from 'express'

const router = Express.Router()

router.get('/', (_: Express.Request, res: Express.Response) => {
  res.send(200)
})

export default router
