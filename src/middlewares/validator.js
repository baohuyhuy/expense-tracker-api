export const validate = (schema) => async (req, res, next) => {
  const result = await schema.safeParseAsync({
    body: req.body,
    query: req.query,
    params: req.params,
  });
  if (!result.success) {
    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: result.error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      })),
    });
  }

  if (result.data.body) {
    req.body = result.data.body;
  }
  if (result.data.params) {
    req.params = result.data.params;
  }
  if (result.data.query) {
    if (!req.locals) {
      req.locals = {};
    }
    req.locals.query = result.data.query;
  }

  next();
};
