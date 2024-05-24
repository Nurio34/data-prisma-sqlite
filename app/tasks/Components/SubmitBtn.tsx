import { useFormStatus } from "react-dom";

function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <button className="btn btn-disabled" disabled={pending}>
                    <span className="loading loading-spinner"></span>
                    Creating...
                </button>
            ) : (
                <button className="btn btn-secondary btn-outline">
                    Create Task
                </button>
            )}
        </>
    );
}

export default SubmitBtn;
