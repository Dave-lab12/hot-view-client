interface IProps {
  link: string;
  text: string;
  linkClass?: string;
}

function Link({ link, text, linkClass }: IProps) {
  return (
    <a
      href={link}
      className={`hover:cursor-pointer mt-1 mx-2 text-orange-700 ${linkClass}`}
    >
      {text}
    </a>
  );
}

export default Link;
