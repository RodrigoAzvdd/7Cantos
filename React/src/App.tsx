import { useContext, useState } from "react"
import { TaskContext } from "./contexts/TaskContext"
import Form from "./components/Form";
import TasksList from "./components/TasksList";

function App() {
  const { tasksArray } = useContext(TaskContext)
  const [filterOption, setFilterOption] = useState("all")

  const filteredTasks = tasksArray.filter((task) => {
    if (filterOption === "all") {
      return tasksArray
    } else if (filterOption === "checked") {
      return task.isFinished
    } else if (filterOption === "unchecked") {
      return !task.isFinished
    }
    return
  })

  return (
    <main className="main-container">
      <Form />
      <select
        name="test"
        id="test"
        onChange={(e) => setFilterOption(e.target.value)}
        value={filterOption}
      >
        <option value="all">Ver Tudo</option>
        <option value="checked">Concluídas</option>
        <option value="unchecked">Pendentes</option>
      </select>
      <TasksList filteredTasks={filteredTasks} />
    </main>
  );
}

export default App;
