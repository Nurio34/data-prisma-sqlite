import Link from "next/link";
import React from "react";

function Dropdown() {
    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
                Menu
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <Link href={"/"} className="btn btn-sm btn-primary">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href={"/tasks"} className="btn btn-sm btn-primary">
                        Tasks
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Dropdown;
