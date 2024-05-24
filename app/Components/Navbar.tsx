import Link from "next/link";
import Dropdown from "./Dropdown";

function Navbar() {
    return (
        <nav className="prose">
            <Dropdown />
        </nav>
    );
}

export default Navbar;
