import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function UseTasks() {
    return useContext(TaskContext)
}