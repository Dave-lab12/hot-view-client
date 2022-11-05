import Input from "./Input"
import Logo from "./Logo"
import Image from "next/image"


function Login(){
    return (
        
        <div className="grid bg-gray-100 place-items-center hover:scale-110 transition duration-150 transform ease-in-out hover:shadow-lg rounded-md h-3/5 p-5">

            <Logo 
                src="/hot-news-logo.png"
            />

            <Input 
                inputName="email"
                inputType="email"
            />

            <Input
                inputName="password"
                inputType="password"
            />
      </div>
    )

}

export default Login