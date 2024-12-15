const Joi = require("joi");
const { all } = require("./contentRoutes");

const createContentSchema = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).optional(),
});

const getContentSchema = Joi.object({
  id: Joi.string().required(),
});

const updateContentSchema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).optional(),
});

const deleteContentSchema = Joi.object({
  id: Joi.string().required(),
});

module.exports = {
  createContentSchema,
  getContentSchema,
  updateContentSchema,
  deleteContentSchema,
};


