import app from './app'
import { PORT } from './core/config/appConfig'
import log from './core/log'

app
  .listen(PORT, () => {
    log.info(`Server running on port : ${PORT}`)
  })
  .on('error', e => log.error(e))
