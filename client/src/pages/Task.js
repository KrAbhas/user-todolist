import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Task({task, handleDelete}) {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`${task['title']}`, {state: task});
    }

    return (<li>
        {task['title']}
        <button onClick={()=>handleDelete(task['_id'])}>Del</button>
        <button onClick={handleEdit}>Edit</button>
    </li>
    )
}