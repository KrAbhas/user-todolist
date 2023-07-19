import { Route, Routes } from "react-router-dom"
import TodoList from "./pages/TodoList"
import Signup from "./pages/Signup"
import SlideInComponent from "./pages/EditTodo"

export const Routings = () => {
    return (
        <Routes>
            <Route path="/" element={<TodoList/>}>
                <Route path=":title" element={<SlideInComponent/>}/>
            </Route>
            <Route path="/signup" element={<Signup/>}/>
        </Routes>
    )
}