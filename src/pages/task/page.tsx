import Navbar from "@/components/Navbar";
import Template from "@/components/Template";

export default function Task(): JSX.Element {
    return (
        <>
            <Navbar />
            <Template>
                <p>Hello from task page!</p>
            </Template>
        </>
    );
}