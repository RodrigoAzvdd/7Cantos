import UseTask from "@/hooks/UseTask";
import { useEffect } from "react";

export default function TaskCard({ task }) {
    return (
        <>
            <div>
                <h1>Title: {task.title}</h1>
                <h1>Description: {task.description}</h1>
                <h1>Author: {task.author}</h1>
            </div>
        </>
    );
}
