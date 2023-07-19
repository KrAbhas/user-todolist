import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import { useUser } from '../auth/useUser';
import AddTodo from './AddTodo';
import Tasks from './Tasks';

const TodoList = () => {
    const [refresh, setRefresh] = useState(true);
    const [list, setList] = useState([]);
    const [token] = useToken();
    const user = useUser();
    const {id} = user;

    const fetchAllData = useCallback(async () => {
        const response = await axios.get(`/api/list/${id}`,{headers:{Authorization:`bearer ${token}`}});
        if (response.status === 200)
            setList(response.data);
    });

    const handleDelete = useCallback(async (taskId) => {
        await axios.delete(`/api/task/${id}/${taskId}`,{headers:{Authorization:`bearer ${token}`}});
        setRefresh(!refresh);
    })

    // console.log(list);

    useEffect(()=>{
        fetchAllData();
    },[refresh])
    return (
        <div>
            <AddTodo onAdd={()=>setRefresh(!refresh)}/>
            <Tasks tasks={list} deleteTask={handleDelete}/>
            {list.length===0?<>Please add task to display</>:<></>}
        </div>
    )
}

export default TodoList;