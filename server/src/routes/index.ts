import express from 'express'
import test from './__test'
import auth from './authentication'
import examSchedule from './exam-schedule'
import schedule from './schedule'
import subject from './subject'
import tuition from './tuition'
import user from './user'
import web from './web'

const router = express.Router()

/*------------------------*/
router.use('/test', test)
/*------------------------*/

/*------------------------*/
router.use('/auth', auth)
router.use(examSchedule)
router.use(schedule)
router.use(subject)
router.use(tuition)
router.use(user)
router.use('/web', web)
/*------------------------*/

export default router
