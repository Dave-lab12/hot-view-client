
interface IProps {
    buttonType: "button" | "submit" | "reset",
    text: string,
    buttonClass?: string,
    link?:string,
    click: any
}

function Button({buttonType, text, buttonClass, link, click}:IProps){
    return (
        <button type={buttonType}
                className={"rounded-lg bg-orange-700 text-white transition duration-150 hover:bg-orange-600 w-20 " + buttonClass}
                onClick={click}
                >
        {text}
        </button>
    )
}

export default Button