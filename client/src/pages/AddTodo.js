import axios from "axios";
import { useState } from "react";
import { useToken } from "../auth/useToken";
import { useUser } from "../auth/useUser";

const AddTodo = (props) => {
    const [task, setTask] = useState('');
    const [token] = useToken();
    const user = useUser();

    const {id} = user;

    const handleClick = async () => {
        const response = await axios.post(`/api/add/${id}`, 
            {userId:id, title:task, done: false},
            {headers:{Authorization:`bearer ${token}`}});
        props.onAdd();
    }
    return (
        <div className="addtask">
            <input
                value={task}
                onChange={e=>setTask(e.target.value)}
                placeholder="Enter Todo"></input>
            <button onClick={handleClick}>Add</button>
            <hr/>
            
        </div>
    )
}

export default AddTodo;