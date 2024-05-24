import { getAllTasks } from "@/utils/actions";
import React from "react";
import Complated from "./Complated";
import EditTask from "./EditTask";

async function TaskList() {
    const tasks = await getAllTasks();

    return (
        <ul>
            {tasks.map((task) => {
                return (
                    <li key={task.id}>
                        <details className="dropdown w-full">
                            <summary className="m-1 btn w-full flex justify-start">
                                <Complated
                                    id={task.id}
                                    complated={task.complated}
                                />
                                <p
                                    className={`${
                                        task.complated &&
                                        " line-through text-gray-300"
                                    }`}
                                >
                                    {task.title}
                                </p>
                                <EditTask id={task.id} />
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a>{task.details}</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                );
            })}
        </ul>
    );
}

export default TaskList;
