"use client";

import { deleteTask } from "@/utils/actions";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

function DeleteTask({ id }: { id: string }) {
    const initialState = { status: "", msg: "" };

    const [state, formAction] = useFormState(deleteTask, initialState);
    const { status, msg } = state;

    useEffect(() => {
        if (status === "success") {
            toast.success(msg);
        } else if (status === "error") {
            toast.error(msg);
        }
    }, [state]);

    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={id} />
            <button type="submit" className=" btn btn-sm btn-error">
                Delete
            </button>
        </form>
    );
}

export default DeleteTask;
