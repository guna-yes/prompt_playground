export const errorHandler = (err, req, res, next) => {
  console.error(`❌ [${req.method}] ${req.url} → ${err.message}`);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "dev" ? err.stack : undefined
  });
};
