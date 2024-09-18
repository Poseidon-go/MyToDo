import { useState } from "react";
import Notications from "./Components/Notications";
import Task from "./Components/addTask";



Home.propTypes = {

}


function Home() {
    const [task, setTask] = useState({});
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks(prev => [...prev, task]);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    const photoURL = localStorage.getItem("photoURL");
    const nameEmail = localStorage.getItem("name");
    const tasksList = JSON.parse(localStorage.getItem("tasks"));
    return (
        <div id="main" className="flex ">
            <header className="flex-[15%] font-semibold">
                <div id="avt" className="flex items-center p-[20px] ml-3">
                    <img src={photoURL} alt="" className="w-[30px] h-[30px] rounded-[50%] object-cover" />
                    <span className="ml-[5px] text-[16px] break-words overflow-hidden ">{nameEmail}</span>
                </div>

                <div id="navTodo" className="h-[450px] overflow-y-scroll mt-6 cursor-pointer">
                    <div className="border-b-2 border-[#F5F3FF] mx-2 mt-2">
                        <div id="Calendar" className="flex justify-between p-[10px]">
                            <div id="CalendarContent" className="flex ml-7">
                                <i className='bx bx-calendar-check text-[25px]' ></i>
                                <span className="ml-2">Today</span>
                            </div>
                            <div id="CalendarNumber" >
                                <span className="font-bold mr-3 ">5</span>
                            </div>
                        </div>
                        <div id="Calendar" className="flex justify-between p-[10px]">
                            <div id="CalendarContent" className="flex ml-7">
                                <i className='bx bx-calendar-week text-[25px]' ></i>
                                <span className="ml-2">Next 7 days</span>
                            </div>
                        </div>
                        <div id="Calendar" className="flex justify-between p-[10px] mb-2">
                            <div id="CalendarContent" className="flex ml-7">
                                <i className='bx bx-notepad text-[25px]' ></i>
                                <span className="ml-2">All</span>
                            </div>
                        </div>
                    </div>
                    {/* calendar 2 */}
                    <div className="border-b-2 border-[#F5F3FF] mx-2 mt-5">
                        <div id="Calendar" className="flex justify-between p-[10px]">
                            <div id="CalendarContent" className="flex ml-6">
                                <span className="ml-2 text-2xl  ">Mylist</span>
                            </div>
                            <div id="CalendarNumber" >
                                <i className='bx bx-plus mr-2 text-xl font-bold' ></i>
                            </div>
                        </div>
                        <div id="Calendar" className="flex justify-between p-[10px]">
                            <div id="CalendarContent" className="flex ml-6">
                                <span className="ml-2  ">Personal</span>
                            </div>
                        </div>
                        <div id="Calendar" className="flex justify-between p-[10px]">
                            <div id="CalendarContent" className="flex ml-6">
                                <span className="ml-2  ">Work</span>
                            </div>
                        </div>
                        <div id="Calendar" className="flex justify-between p-[10px] mb-2">
                            <div id="CalendarContent" className="flex ml-6">
                                <span className="ml-2  ">Educations</span>
                            </div>
                        </div>
                    </div>
                    {/* calendar 3 */}
                    <div className="border-b-2 border-[#F5F3FF] mx-2 mt-5">
                        <div id="Calendar" className="flex justify-between p-[10px]">
                            <div id="CalendarContent" className="flex ml-7">
                                <i className='bx bx-check-circle text-[25px]' ></i>
                                <span className="ml-2">Completed</span>
                            </div>
                        </div>
                        <div id="Calendar" className="flex justify-between p-[10px]">
                            <div id="CalendarContent" className="flex ml-7">
                                <i className='bx bx-trash text-[25px]' ></i>
                                <span className="ml-2">Trash</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="create" className="mt-[90px] mx-[10px]">
                    <button className="w-full bg-[--main] text-white p-[10px] rounded-[5px] cursor-pointer">Create Workspace</button>
                </div>
            </header>
            <div id="container" className="flex-[85%] ">
                <div className="flex  justify-between items-center  h-[70px] bg-[--main] px-[40px] py-[2px]">
                    <div id="search" className="flex items-center w-[45%] p-[10px] border rounded-[15px] ">
                        <i className='bx bx-search-alt-2 text-white text-[25px]'></i>
                        <input placeholder="Search" type="text" className="w-full focus:outline-none placeholder:text-white text-white border-none bg-transparent ml-3" />
                    </div>
                    <div id="TaskContainer" className=" text-white cursor-pointer">
                        <i className='bx bx-question-mark mr-4 text-[20px]'></i>

                        <i className='bx bxs-bell text-[20px] relative group'>
                            <div className="group-hover:block hidden absolute top-[20px] left-[-140px] border bg-white w-[150px] h-[200px] shadow-md rounded-[5px] p-2 ">
                                <h3 className="text-[--main]  text-[15px] uppercase mb-2">Notications</h3>

                                <Notications />
                            </div>
                        </i>
                    </div>
                </div>

                <div className="p-10 relative">
                    <div id="titleContent" className="mb-2">
                        <h1 className="text-2xl font-semibold">Today</h1>
                        <span className="font-semibold mt-4 block">Aug 5.
                            <span>
                                Today <span className="text-[#9F9898]">5</span>
                            </span>
                        </span>
                    </div>

                    <div id="todoContent" className="mt-6 h-[300px] w-[750px] overflow-y-scroll">
                        {
                            
                            tasksList.map((taskText,index) => {
                                return <Task key={index} taskText={taskText.name} />
                            })
                    
                        }
                    </div>

                    <div id="formText" className="w-[700px] flex border border-[--task] p-[10px] text-[#9F9898] rounded-[5px] fixed bottom-[48px] left-[270px]">
                        <i className='bx bx-plus mr-2 text-lg font-semibold text-[--main] cursor-pointer' onClick={addTask}></i>
                        <input placeholder="Ask Task" type="text" className="w-[80%] focus:outline-none placeholder:text-[#9F9898] text-[#9F9898] border-none bg-transparent ml-3" onChange={(e) => {
                            setTask(preTasks =>({
                                ...preTasks,
                                name : e.target.value,
                            }));
                        }} onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                addTask();
                            }
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;