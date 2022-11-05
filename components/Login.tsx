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
                className={'mt-10'}
            />

            <Input
                inputName="password"
                inputType="password"
                className={''}
            />
      </div>
    )

}

export default Login