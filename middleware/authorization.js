const jwt = require('jsonwebtoken');

module.exports.authorization = function (req, res, next) {
     const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'No credentials sent!' });
    }
    const bearer = token.split(" ")[1];
    try {
        const payload = jwt.verify(bearer, 'c2VjcmV0bm9kZXRlc3Q=');
        if (payload) {
            return next();
        }
    } catch (error) {
        return res.status(401).json({ error: 'Invalid credentials sent!' });
    }

}
