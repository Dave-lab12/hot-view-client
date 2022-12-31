import * as LabelR from "@radix-ui/react-label";

interface IProps {
  content: string;
  className?: string;
}

export const Label = ({ content, className = "" }: IProps) => {
  return <LabelR.Root className={className}>{content}</LabelR.Root>;
};
