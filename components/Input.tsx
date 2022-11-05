
interface IProps {
    inputName: string,
    inputType: string,
}

function Input({inputName, inputType}: IProps){
    return (
        <input type={inputType} placeholder={inputName} name={inputName} />
    )
}

export default Input;