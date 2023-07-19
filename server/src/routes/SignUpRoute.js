import { getDbConnection } from "../db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { emptyMiddleware } from "../middleware/emptyMiddleware";

export const SignUpRoute = {
    path: '/api/signup',
    method: 'post',
    middleware: emptyMiddleware,
    handler: async (req, res) => {
        const {email, password} = req.body;
        const db = getDbConnection('react-todolist');
        const user = await db.collection('users').findOne({email});

        if (user) res.sendStatus(409);

        const passwordHash = await bcrypt.hash(password, 10);

        const result = await db.collection('users').insertOne({ email, passwordHash });

        const {insertedId} = result;

        jwt.sign({id: insertedId, email}, process.env.JWT_SECRET, {expiresIn:'2d'}, (err, token) => {
            if (err) res.status(500).send(err);
            res.status(200).json({token});
        });
    }
}