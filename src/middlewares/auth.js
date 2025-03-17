module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization!==process.env.SCRET_KEY) return res.status(401).json({ message: 'Unauthorized' });
    
    // Add token validation logic
    next();
  };
  