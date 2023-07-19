import { getDbConnection } from "../db";
import { verifyJWT } from "../middleware/verifyJWT";

export const AddTaskRoute = {
    path: '/api/add/:userId',
    method:'post',
    middleware: verifyJWT,
    handler: async (req, res) => {
        const data = req.body;
        console.log(data);
        try {
            const db = getDbConnection('react-todolist');
            const result = await db.collection('data').insertOne(data);
            res.status(200).json({message:"success"});
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
}