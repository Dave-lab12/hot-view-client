interface IProps {
  errorMessage: string;
  spanClass?: string;
}
function ErrorSpan({ errorMessage, spanClass }: IProps) {
  return (
    <span
      className={`place-self-start text-sm mt-0 mb-3 ml-2 text-red-600 ${spanClass}`}
    >
      {errorMessage}
    </span>
  );
}

export default ErrorSpan;
