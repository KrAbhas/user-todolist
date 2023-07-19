import { Outlet } from "react-router-dom";
import Task from "./Task";

export default function Tasks({tasks, deleteTask}) {
    return (
        <div>
            <ul>
            {tasks.map(task => {
                return <Task task={task} handleDelete={deleteTask}/>
            })}
        </ul>
        <Outlet/>
        </div>

    )
}