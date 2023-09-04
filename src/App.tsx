import { useContext, useState } from "react"
import { TaskContext } from "./contexts/TaskContext"
import Form from "./components/Form";
import TaskCard from "./components/TaskCard";

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
        <option value="all">All</option>
        <option value="checked">Checked</option>
        <option value="unchecked">Unchecked</option>
      </select>

      <h1>Tasks</h1>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        {filteredTasks.map(task => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>

    </main>
  );
}

export default App;
