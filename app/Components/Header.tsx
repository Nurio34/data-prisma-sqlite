import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="prose max-w-none prose-sm flex items-center justify-between gap-[4vw]">
            <h1 className=" m-0">Next-App</h1>
            <Navbar />
        </header>
    );
}

export default Header;
