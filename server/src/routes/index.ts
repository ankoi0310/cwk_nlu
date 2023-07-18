import express from 'express'
// import { createProxyMiddleware } from 'http-proxy-middleware'
import auth from './authentication'
import schedule from './schedule'
import subject from './subject'
import test from './__test'
import user from './user'
import web from './web'

const router = express.Router()

/*------------------------*/
router.use('/test', test)
/*------------------------*/

/*------------------------*/
router.use('/auth', auth)
router.use(schedule)
router.use(subject)
router.use(user)
router.use('/web', web)
/*------------------------*/

export default router
