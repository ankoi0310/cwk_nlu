import Joi from "joi";
import { JoiAuthBearer } from "../../validation";

export default {
  auth: Joi.object()
    .keys({
      authorization: JoiAuthBearer().required(),
    })
    .unknown(true),
}