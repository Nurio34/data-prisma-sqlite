"use client";

import { createTask } from "@/utils/actions";
import SubmitBtn from "./SubmitBtn";
import FormState from "./FormState";
import { useFormState } from "react-dom";

function Form() {
    const initialState = { status: "", msg: "" };

    const [state, formAction]: any = useFormState(createTask, initialState);

    return (
        <form action={formAction} className=" grid gap-[1vh]">
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
            <FormState state={state} />
        </form>
    );
}

export default Form;
