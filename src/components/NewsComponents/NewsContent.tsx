interface IProps {
  content: string;
  className?: string;
}

function NewsContent({ content, className = "" }: IProps) {
  return (
    <>
      <text className={` text-md text-gray-700 ${className}`}>{content}</text>
    </>
  );
}

export default NewsContent;
