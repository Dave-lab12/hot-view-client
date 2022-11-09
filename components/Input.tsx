interface IProps {
  inputName: string;
  inputType: string;
  inputClass?: string;
}

function Input({ inputName, inputType, inputClass }: IProps) {
  return (
    <input
      type={inputType}
      placeholder={inputName}
      name={inputName}
      className={`border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-4 focus:border-transparent p-1 h-9 ${inputClass}`}
    />
  );
}

export default Input;
