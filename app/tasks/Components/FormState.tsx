function FormState({ state }: any) {
    const { status, msg } = state;

    return (
        <>
            {state.status !== "" && status === "success" && (
                <div role="alert" className="alert alert-success mt-[1vh]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{msg}</span>
                </div>
            )}
            {state.status !== "" && status === "error" && (
                <div
                    role="alert"
                    className="alert alert-error  mt-[1vh] text-start"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <ul>
                        {msg.split(",").map((item: string, ind: number) => {
                            return <li key={ind}>{item}</li>;
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}

export default FormState;
