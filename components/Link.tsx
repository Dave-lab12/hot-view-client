
interface IProps {
    link: string,
    text: string,
    linkClass?: string
}

function Link({link, text, linkClass}:IProps){
    return(
        <a href={link} className={"underline text-blue-700 hover:cursor-pointer mt-1 mx-2 "+linkClass}>{text}</a>
    )
}

export default Link