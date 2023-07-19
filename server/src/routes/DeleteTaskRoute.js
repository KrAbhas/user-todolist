import { ObjectId } from "mongodb";
import { getDbConnection } from "../db";
import { verifyJWT } from "../middleware/verifyJWT";

export const DeleteTaskRoute = {
    path: '/api/task/:userId/:taskId',
    method:'delete',
    middleware: verifyJWT,
    handler: async (req, res) => {
        const {taskId} = req.params;
        try {
            console.log(taskId)
            const db = getDbConnection('react-todolist');
            const result = await db.collection('data').deleteOne({_id: new ObjectId(taskId)});
            res.status(200).json(result);
        } 
        catch (error) {
            res.status(500).send(error);
        }
    }
}