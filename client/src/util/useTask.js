import { useState } from "react"

export const useTask = () => {
    const [currTask, setCurrTask] = useState();

    return currTask;
}