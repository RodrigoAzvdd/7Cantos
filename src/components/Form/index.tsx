import { useRef } from "react"
import UseTasks from "../../hooks/UseTasks"

const Form = () => {

    const { addTask } = UseTasks()
    const nameInput = useRef<HTMLInputElement>(null)
    const descriptionInput = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        if (nameInput.current && descriptionInput.current) {
            addTask(nameInput.current.value, descriptionInput.current.value)
        }
    }

    return (
        <form>
            <div>
                <label htmlFor="name">Nome</label>
                <input type="text" name="name" id="name" ref={nameInput} />
            </div>
            <div>
                <label htmlFor="name">Descricao</label>
                <input type="text" name="name" id="name" ref={descriptionInput} />
            </div>
            <button onClick={handleClick}>Add</button>
        </form>
    )
}

export default Form