interface IProps {
  errorMessage: string;
  spanClass?: string;
}
function ErrorSpan({ errorMessage, spanClass }: IProps) {
  return (
    <span className={`place-self-start text-sm my-1 text-red-600 ${spanClass}`}>
      {errorMessage}
    </span>
  );
}

export default ErrorSpan;
