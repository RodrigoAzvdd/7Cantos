import { useContext, useRef } from "react"
import { TaskContext } from "./contexts/TaskContext"
import Button from "./components/Button";

function App() {
  const { tasksArray, currentTask, addTask, removeTask, toggleCheck } = useContext(TaskContext)

  return (
    <main>
      <button onClick={() => addTask('TEST', 'TEST-test')}>TEST</button>
      <button onClick={() => addTask('ROD', 'ROD-test')}>ROD</button>
      <button onClick={() => addTask('RODTEST', 'RODTEST-test')}>RODTEST</button>
      <h1>Tasks</h1>
      <ul>
        {tasksArray.map(task => (
          <li key={task.id}>
            {task.isFinished ?
              <div style={{ textDecoration: 'line-through' }}>Title: {task.name}</div>
              :
              <div style={{ textDecoration: 'none' }}>Title: {task.name}</div>
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
