module.exports = (schema) => {
    return (req, res, next) => {
      const data = req.method === "GET" ? req.params : req.body;
      const { error } = schema.validate(data);
      if (error) {
        res.status(400).json({
          error: error.details[0].message,
          uuAppErrorMap: {},
        });
      } else {
        next();
      }
    };
  };

  