import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import routes from './routes'

process.on('uncaughtException', e => {
  console.error(e)
})

const app = express()

/*---------------------------------*/
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }))
/*---------------------------------*/

app.options('*', cors())

/*---------- API ------------*/
app.use(function (request, response, next) {
  request.setTimeout(60 * 60 * 1000, function () {
    console.log('Request has timed out.')
    response.send(408)
  })
  next()
})
app.use('/api', routes)
/*---------------------------*/

/*---------- GET METHOD NOT FOUND RETURN NOT FOUND RESPONSE ----------*/
app.get('*', (req, res) => {
  res.status(404).json({ message: 'Not found' })
})
/*--------------------------------------------------------------------*/

export default app
