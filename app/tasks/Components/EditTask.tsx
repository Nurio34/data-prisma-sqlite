import Link from "next/link";

function EditTask({ id }: { id: string }) {
    return (
        <Link className="btn btn-sm btn-info ml-auto" href={`/tasks/${id}`}>
            Edit
        </Link>
    );
}

export default EditTask;
