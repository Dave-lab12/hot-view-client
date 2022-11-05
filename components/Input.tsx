
interface IProps {
    inputName: string,
    inputType: string,
}

function Input({inputName, inputType}: IProps){
    return (
        <input type={inputType}
            placeholder={inputName}
            name={inputName}
            className='border border-transparent focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent rounded-md'

           />
    )
}

export default Input;