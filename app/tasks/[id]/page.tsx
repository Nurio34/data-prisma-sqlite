import { getTask, updateTask } from "@/utils/actions";

async function EditTask({ params }: { params: { id: string } }) {
    const id = params.id;
    const task = await getTask(id);
    const { title, details, start, importance, day, subject }: any = task;

    const [date, month, dayStr, year] = start.toDateString().split(" ");
    const months: any = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    };
    const startObject = year + "-" + months[month] + "-" + dayStr;

    return (
        <form action={updateTask} className=" grid gap-[1vh]">
            <input type="hidden" name="id" value={id} />
            <input
                type="text"
                name="title"
                id="title"
                className="rounded py-1 w-full input-secondary"
                defaultValue={title}
            />
            <textarea
                name="details"
                id="details"
                className="rounded py-1 w-full input-secondary"
                defaultValue={details}
            />
            <div className=" flex gap-[2vw]">
                <input
                    type="date"
                    name="start"
                    id="start"
                    className="rounded py-1 w-full input-secondary"
                    defaultValue={startObject}
                />
                <select
                    name="importance"
                    id="importance"
                    className="rounded py-1 w-full input-secondary"
                    defaultValue={importance}
                >
                    <option value="" disabled>
                        Importance
                    </option>
                    <option value="not-important">Not Important</option>
                    <option value="normal">Normal</option>
                    <option value="important">Important</option>
                </select>
            </div>
            <div className=" flex justify-between">
                <label htmlFor="today">
                    Today{" "}
                    <input
                        type="radio"
                        name="day"
                        id="today"
                        className="radio-secondary"
                        value="today"
                        defaultChecked={day === "today" && true}
                    />
                </label>
                <label htmlFor="tomorrow">
                    Tomorrow{" "}
                    <input
                        type="radio"
                        name="day"
                        id="tomorrow"
                        className="radio-secondary"
                        value="tomorrow"
                        defaultChecked={day === "tomorrow" && true}
                    />
                </label>
                <label htmlFor="later">
                    Later{" "}
                    <input
                        type="radio"
                        name="day"
                        id="later"
                        className="radio-secondary"
                        value="later"
                        defaultChecked={day === "later" && true}
                    />
                </label>
            </div>
            <div className="flex justify-between">
                <label htmlFor="hobby">
                    Hobby{" "}
                    <input
                        type="checkbox"
                        name="subject"
                        id="hobby"
                        value="hobby"
                        className=" checkbox-secondary"
                        defaultChecked={subject.includes("hobby")}
                    />
                </label>
                <label htmlFor="software">
                    Software{" "}
                    <input
                        type="checkbox"
                        name="subject"
                        id="software"
                        value="software"
                        className=" checkbox-secondary"
                        defaultChecked={subject.includes("software")}
                    />
                </label>
                <label htmlFor="private">
                    Private{" "}
                    <input
                        type="checkbox"
                        name="subject"
                        id="private"
                        value="private"
                        className=" checkbox-secondary"
                        defaultChecked={subject.includes("private")}
                    />
                </label>
            </div>
            <button className="btn btn-primary">Edit</button>
        </form>
    );
}

export default EditTask;
