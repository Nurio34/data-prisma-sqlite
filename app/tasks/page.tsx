"use client";

import { useState } from "react";
import Form from "./Components/Form";
import TaskList from "./Components/TaskList";

function Tasks() {
    const [task, setTask] = useState<{}>({});

    return (
        <main className=" prose">
            <section>
                <h2 className="text-center">Tasks</h2>
                <Form setTask={setTask} />
                <TaskList task={task} />
            </section>
        </main>
    );
}

export default Tasks;
