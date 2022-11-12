interface IProps {
  link: string;
  text: string;
  linkClass?: string;
  textClass?: string;
}

function Link({ link, text, linkClass, textClass }: IProps) {
  return (
    <a
      href={link}
      className={`hover:cursor-pointer mt-1 mx-2 text-orange-700 ${linkClass}`}
    >
      <p className={textClass}>{text}</p>
    </a>
  );
}

export default Link;
