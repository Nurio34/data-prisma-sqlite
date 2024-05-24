"use client";

import { updateComplated } from "@/utils/actions";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

function Complated({ id, complated }: { id: string; complated: boolean }) {
    const initialState = { status: "", msg: "" };

    const [state, formAction]: any = useFormState(
        updateComplated,
        initialState,
    );

    const SubmitBtn = useRef<HTMLButtonElement | null>(null);

    const submitForm = () => {
        if (SubmitBtn.current) {
            SubmitBtn.current.click();
        }
    };

    const [msg, setMsg] = useState<string>(state.msg);

    useEffect(() => {
        setMsg(state.msg);

        const time = setTimeout(() => {
            setMsg("");
        }, 1000);

        return () => clearTimeout(time);
    }, [state]);

    return (
        <form action={formAction}>
            {msg && <p>{msg}</p>}
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
