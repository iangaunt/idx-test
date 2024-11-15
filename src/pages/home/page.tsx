import Navbar from "@/components/Navbar";
import Template from "@/components/Template";

export default function Home(): JSX.Element {
    return (
        <>
            <Navbar />
            <Template>
                <p>Hello from home page!</p>
            </Template>
        </>
    );
}