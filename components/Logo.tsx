import Image from "next/image";

interface IProps {
  src: string;
  logoClass?: string;
}
function Logo({ src, logoClass }: IProps) {
  return (
    <Image
      src={src}
      width={100}
      height={100}
      objectFit="contain"
      className={`rounded-full tranistion duration-100 transform ease-in-out hover:scale-105 ${logoClass}`}
      alt="Logo image"
    />
  );
}

export default Logo;
