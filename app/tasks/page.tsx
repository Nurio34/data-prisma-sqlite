import Form from "./Components/Form";
import TaskList from "./Components/TaskList";

function Tasks() {
    return (
        <main className=" prose">
            <section>
                <h2 className="text-center">Tasks</h2>
                <Form />
                <TaskList />
            </section>
        </main>
    );
}

export default Tasks;
