import express from 'express';
import {routes} from './routes';
import { initializeDbConnection } from './db';
import cors from 'cors';

const PORT = process.env.PORT || 8080;

const app = express();

//this allows to access body of post/put
//requests in our route handlers (as req.body)
app.use(express.json());

routes.forEach((route) => {
    app[route.method](route.path, route.middleware, route.handler);
});

initializeDbConnection()
    .then(()=> {
        app.listen(PORT, ()=>{
            console.log(`Server is running on PORT ${PORT}`);
        })
    })