
interface IProps {
    buttonType: "button" | "submit" | "reset",
    text: string,
    buttonClass?: string,
}

function Button({buttonType, text, buttonClass}:IProps){
    return (
        <button type={buttonType}
                className={"rounded-lg bg-orange-700 text-white transition duration-150 hover:bg-orange-600 w-20 " + buttonClass}>
        {text}
        </button>
    )
}

export default Button