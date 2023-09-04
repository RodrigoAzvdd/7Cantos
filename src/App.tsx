import { useContext, useState } from "react"
import { TaskContext } from "./contexts/TaskContext"
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const { tasksArray, addTask, removeTask, toggleCheck } = useContext(TaskContext)
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
    <main>

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
      <ul style={{ listStyle: 'none' }}>
        {filteredTasks.map(task => (
          <li key={task.id}>
            {task.isFinished ?
              <div>
                <h1 style={{ textDecoration: 'line-through' }}>Nome: {task.name}</h1>
                <p>Descricao: {task.description}</p>
              </div>
              :
              <div>
                <h1 style={{ textDecoration: 'none' }}>Nome: {task.name}</h1>
                <p>Descricao: {task.description}</p>
              </div>
            }
            <Button text="Remover" func={() => removeTask(task.id)} />
            <Button func={() => toggleCheck(task.id)} text="Check" />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
