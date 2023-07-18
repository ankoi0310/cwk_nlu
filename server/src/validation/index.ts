import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import log from '../core/log';
import { HttpStatusCode } from 'axios';

export enum ValidationSource {
  BODY = 'body',
  HEADER = 'headers',
  QUERY = 'query',
  PARAM = 'params',
}

export const JoiAuthBearer = () =>
  Joi.string().custom((value: string, helpers) => {
    if (!value.startsWith('Bearer ')) return helpers.error('any.invalid');
    if (!value.split(' ')[1]) return helpers.error('any.invalid');
    return value;
  }, 'Authorization Header Validation');

export const validate = (schema: Joi.AnySchema, source: ValidationSource = ValidationSource.BODY) =>
  (request: Request, response: Response, next: NextFunction) => {
    try {
      const { error } = schema.validate(request[source]);

      if (!error) return next();

      const { details } = error;
      const message = details
        .map((i) => i.message.replace(/['"]+/g, ''))
        .join(',');
      log.error(message);

      return response.status(HttpStatusCode.BadRequest).json({ message });
    } catch (error) {
      next(error);
    }
  };
