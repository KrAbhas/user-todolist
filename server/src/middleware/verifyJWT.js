import jwt from 'jsonwebtoken';

export const verifyJWT = (req, res, next) => {
    try {
        const {authorization} = req.headers;
        const {userId} = req.params;
        const token = authorization.split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, async (error, decode) => {
            if (error) {
                res.status(401).json({message:"unable to verify token"});
            }
            const {id} = decode;
            if (id !== userId) {
                res.status(403).json({message:"invalid user"});
            }
            next();
        });
    } catch (error) {
        res.status(500).json({message:"couldn't verify"});
    }
}