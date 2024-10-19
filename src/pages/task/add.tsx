import Navbar from "@/components/Navbar";
import Template from "@/components/Template";

import styles from "@/styles/add.module.css"

import { Icon } from '@iconify-icon/react';
import { useState } from "react";

export default function AddTask(): JSX.Element {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    
    return (
        <>
            <Navbar />
            <Template>
                <div className={styles.container}>
                    <h1>
                        <Icon className={styles.icon} icon="material-symbols:add-box-outline" />
                        Add Task
                    </h1>

                    <input placeholder="Title: Task name" onChange={(e) => {
                        setTitle(e.target.value);
                    }}></input>
                    <input placeholder="Description: Task description" onChange={(e) => {
                        setDescription(e.target.value);
                    }}></input>
                    <input placeholder="Date: mm/dd/yy" type="date" onChange={(e) => {
                        setDate(e.target.value);
                    }}></input>
                    

                    <button>
                        <Icon className={styles.icon} icon="gridicons:add-outline" /> 
                        Add to List
                    </button>
                </div> 
            </Template>
        </>
    );
}