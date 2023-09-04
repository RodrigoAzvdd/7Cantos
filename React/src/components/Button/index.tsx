import styles from './style.module.css'


const Button = ({ text, func, color }: {
    text: string
    func: () => void
    color?: "success" | "error"
}) => {

    const buttonClass = color === "success" ? styles.successBtn : color === "error" ? styles.errorBtn : styles.defaultBtn

    return (
        <button  className={`${styles.btn} ${buttonClass}`} onClick={func}>{text}</button>
    )
}

export default Button;
