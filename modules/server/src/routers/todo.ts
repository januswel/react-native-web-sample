import * as Express from 'express'

const router = Express.Router()

router.post('/', (_: Express.Request, __: Express.Response) => {
  // TODO
})

router.get('/', (_: Express.Request, res: Express.Response) => {
  // TODO
  res.send(200)
})

router.get('/:id', (_: Express.Request, __: Express.Response) => {
  // TODO
})

router.patch('/:id', (_: Express.Request, __: Express.Response) => {
  // TODO
})

router.delete('/:id', (_: Express.Request, __: Express.Response) => {
  // TODO
})

export default router
