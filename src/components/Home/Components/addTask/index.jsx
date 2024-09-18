import { useId } from "react";

// eslint-disable-next-line react/prop-types
const Task = ({taskText}) => {
    const idUser = useId();
    const removeTask = () => {
        console.log(taskText)
        const taskID = document.getElementById("formText");
        if (!taskID) return;
        taskID.remove();
    }
    return (
        <div id="formText" className="flex items-center justify-between w-[700px]  border border-[--task] p-[10px] text-[#9F9898] rounded-[5px] my-4 ">
                <div id="adminDisplay">
                    <input id={idUser} type="checkbox" className="mr-2 cursor-pointer"></input>
                    <label htmlFor={idUser} className="w-full cursor-pointer">{taskText}</label>
                </div>
                <div id="adminRemove" className="cursor-pointer">  
                    <i className='bx bx-edit inline-block text-xl'></i>
                    <i className='bx bxs-trash inline-block ml-2 text-xl' onClick={removeTask}></i>
                </div>
        </div>
    )
}

export  default Task;