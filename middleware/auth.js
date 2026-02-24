import jwt from 'jsonwebtoken'
const SECRET = "hello123"

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const user = jwt.verify(token, SECRET);
        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Not authenticated" });
        }

        if (roles.includes(req.user.role)) {
            next();
        } else {
            return res.status(403).json({ message: "Forbidden" });
        }
    };
};

export { authenticate, authorize }