import Input from "./Input"
import Logo from "./Logo"
import Image from "next/image"


function Login(){
    return (
        
        <div className="grid place-items-center">

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