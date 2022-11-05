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
            className='border rounded-full tranistion duration-100 transform ease-in-out hover:scale-105'
        />
    )
}

export default Logo