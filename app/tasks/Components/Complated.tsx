"use client";

import { updateComplated } from "@/utils/actions";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";

function Complated({ id, complated }: { id: string; complated: boolean }) {
    const initialState = { status: "", msg: "" };

    const [state, formAction]: any = useFormState(
        updateComplated,
        initialState,
    );

    const { status, msg } = state;

    const SubmitBtn = useRef<HTMLButtonElement | null>(null);

    const submitForm = () => {
        if (SubmitBtn.current) {
            SubmitBtn.current.click();
        }
    };

    useEffect(() => {
        if (status === "success") {
            toast.success(msg);
        } else if (status === "error") {
            toast.error(msg);
        }
    }, [state]);

    return (
        <form action={formAction}>
            <label htmlFor="complated">
                <input
                    type="checkbox"
                    name="complated"
                    id="complated"
                    defaultChecked={complated}
                    onChange={submitForm}
                />
                <input type="hidden" name="id" value={id} />
            </label>
            <button type="submit" ref={SubmitBtn}></button>
        </form>
    );
}

export default Complated;
