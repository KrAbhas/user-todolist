import { getDbConnection } from "../db";
import { verifyJWT } from "../middleware/verifyJWT";

export const GetTasksRoute = {
    path: '/api/list/:userId',
    method:'get',
    middleware: verifyJWT,
    handler: async (req, res) => {
        const {userId} = req.params;
        try {
            const db = getDbConnection('react-todolist');
            const result = await db.collection('data').find({userId}).toArray();
            res.status(200).json(result);
        } 
        catch (error) {
            res.status(500).send(error);
        }
    }
}