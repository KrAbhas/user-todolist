import { emptyMiddleware } from "../middleware/emptyMiddleware";

export const LogInRoute = {
    path:'/api/login',
    method:'post',
    middleware: emptyMiddleware,
    handler: async (req, res) => {

    }
}