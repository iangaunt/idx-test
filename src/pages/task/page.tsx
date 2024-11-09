import Navbar from "@/components/Navbar";
import Template from "@/components/Template";

import styles from "@/styles/task.module.css";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/scripts/FirebaseConfig"
import Task from "./Task";

export default function Tasks(): JSX.Element {
    const components: Array<JSX.Element> = [];

    const getData = async() => {
        console.log("data");
        
        const q = query(collection(db, "tasks"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            components.push(
                <Task task={doc.data().title}></Task>
            );
        });
    }

    getData();

    return (
        <>
            <Navbar />
            <Template>
                <div className={styles.container}>
                    {components}
                </div>
            </Template>
        </>
    );
}