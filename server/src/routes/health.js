import { emptyMiddleware } from "../middleware/emptyMiddleware";

export const health = {
    path: '/api/health',
    method: 'get',
    middleware: emptyMiddleware,
    handler: async (req, res)=> {
        console.log("got a request");
        res.status(200).json({message: "It works"});
    }
}