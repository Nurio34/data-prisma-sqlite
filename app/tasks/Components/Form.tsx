"use client";

import SubmitBtn from "./SubmitBtn";
import { useRef } from "react";
import axios from "axios";

function Form({ setTask }) {
    const Form = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (Form.current) {
            const formData = Object.fromEntries(new FormData(Form.current));
            console.log(formData);

            const res = await axios.post("api/tasks", formData);
            console.log({ res });
            setTask(res);
        }
    };

    return (
        <form ref={Form} className=" grid gap-[1vh]" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                id="title"
                className="rounded py-1 w-full input-secondary"
                placeholder="Enter Task..."
            />
            <textarea
                name="details"
                id="details"
                className="rounded py-1 w-full input-secondary"
                placeholder="Enter Details..."
            />
            <div className=" flex gap-[2vw]">
                <input
                    type="date"
                    name="start"
                    id="start"
                    className="rounded py-1 w-full input-secondary"
                />
                <select
                    name="importance"
                    id="importance"
                    className="rounded py-1 w-full input-secondary"
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
                    />
                </label>
            </div>

            <SubmitBtn />
        </form>
    );
}

export default Form;
