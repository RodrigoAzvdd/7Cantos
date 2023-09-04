import { useRef } from "react"
import UseTasks from "../../hooks/UseTasks"
import styles from './style.module.css'
import Button from "../Button"

const Form = () => {

    const { addTask } = UseTasks()

    const nameInput = useRef<HTMLInputElement>(null)
    const descriptionInput = useRef<HTMLInputElement>(null)

    const handleClick = (e?: React.FormEvent) => {
        e?.preventDefault()
        if (nameInput.current && descriptionInput.current) {
            addTask(nameInput.current.value, descriptionInput.current.value)
        }
    }

    return (
        <form className={styles.form}>
            <div className={styles.inputDiv}>
                <label className={styles.label} htmlFor="name">Nome</label>
                <input className={styles.input} type="text" name="name" id="name" ref={nameInput} />
            </div>
            <div className={styles.inputDiv}>
                <label className={styles.label} htmlFor="name">Descricao</label>
                <input className={styles.input} type="text" name="name" id="name" ref={descriptionInput} />
            </div>
            <Button  text="Add" func={() => handleClick()} />
        </form>
    )
}

export default Form