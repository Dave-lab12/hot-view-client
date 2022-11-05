import Image from 'next/image';

interface IProps {
    src: string
}
function Logo({src}: IProps){
    return(
        <Image
            src={src}
            width={100}
            height={100}
            className='border rounded-full hover:scale-105 hover:animate-pulse'
        />
    )
}

export default Logo