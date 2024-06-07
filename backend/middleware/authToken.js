const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

        if (!token) {
            return res.status(401).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        const secretToken = process.env.TOKEN_SECRET_KEY;

        jwt.verify(token, secretToken, function (err, decoded) {
            if (err) {
                console.log("JWT verification error:", err);
                return res.status(401).json({
                    message: "Invalid Token",
                    error: true,
                    success: false
                });
            }

            req.userId = decoded._id;
            next();
        });
    } catch (err) {
        console.error("Auth error:", err);
        res.status(500).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = authToken;