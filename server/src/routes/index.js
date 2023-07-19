import { AddTaskRoute } from "./AddTaskRoute";
import { DeleteTaskRoute } from "./DeleteTaskRoute";
import { GetTasksRoute } from "./GetTasksRoute";
import { health } from "./health";
import { SignUpRoute } from "./SignUpRoute";

export const routes = [
    health,
    SignUpRoute,
    AddTaskRoute,
    GetTasksRoute,
    DeleteTaskRoute,
]