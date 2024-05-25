import { getAllTasks } from "@/utils/actions";
import React, { useEffect, useState } from "react";
import Complated from "./Complated";
import EditTask from "./EditTask";
import DeleteTask from "./DeleteTask";

function TaskList({ task }: any) {
    const [tasks, setTasks] = useState<[]>([]);
    console.log(tasks);

    useEffect(() => {
        setTasks(task);
    }, [task]);

    return (
        <ul>
            {/* {tasks.map((item: any) => {
                return (
                    <li key={item.id}>
                        <details className="dropdown w-full">
                            <summary className="m-1 btn w-full flex justify-start">
                                <Complated
                                    id={item.id}
                                    complated={item.complated}
                                />
                                <p
                                    className={`${
                                        item.complated &&
                                        " line-through text-gray-300"
                                    }`}
                                >
                                    {item.title}
                                </p>
                                <EditTask id={item.id} />
                                <DeleteTask id={item.id} />
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                <li>
                                    <a>{item.details}</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                );
            })} */}
        </ul>
    );
}

export default TaskList;
