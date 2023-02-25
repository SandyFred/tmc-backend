const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    const errorMesssages = error.details
      .map((details) => details.message)
      .join(",");
    res.status(400).json({ error: errorMesssages });
  } else {
    next();
  }
};

module.exports = validate;
