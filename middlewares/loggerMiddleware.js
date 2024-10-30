export const loggerMiddleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next();
  };
  