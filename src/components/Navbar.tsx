import Link from "next/link";

export default function Navbar(): JSX.Element {
    return (
        <div className="navbar">
            <p className="idx">./idx-test</p>
            <Link href="/home/page">Home</Link>
            <Link href="/task/page">Tasks</Link>
            <Link href="/task/add">Add Task</Link>

            <a className="logout">Logout</a>
        </div>
    )
}