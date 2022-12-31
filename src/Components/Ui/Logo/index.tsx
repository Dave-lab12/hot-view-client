import Image from "next/image";

interface IProps {
  src: string;
  logoClass?: string;
  width?: number;
  height?: number;
}
export function Logo({ src, logoClass, width = 100, height = 100 }: IProps) {
  return (
    <div className={logoClass}>
      <Image
        src={src}
        width={width}
        height={height}
        objectFit="contain"
        className={`rounded-full tranistion duration-100 transform ease-in-out hover:scale-105`}
        alt="Logo image"
      />
    </div>
  );
}
