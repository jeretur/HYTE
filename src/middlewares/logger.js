const requestLogger = (req, res, next) => {
  console.log(
    'request',
    new Date().toLocaleDateString('fi-EN'),
    req.method,
    req.url,
  );
  if (req.body0) {
    console.log('body:', req.body);
  }

  next();
};

export default requestLogger;
