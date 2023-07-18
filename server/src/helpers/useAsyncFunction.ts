import { NextFunction, Request, Response } from 'express'

type AsyncFunction = (request: Request, response: Response, next: NextFunction) => Promise<any>;

const useAsyncFunction = (execution: AsyncFunction) => (request: Request, response: Response, next: NextFunction) => {
  execution(request, response, next).catch(next)
}

export default useAsyncFunction
