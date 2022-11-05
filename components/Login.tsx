import Input from "./Input"
import Logo from "./Logo"


function Login(){
    return (
        <div className="grid">

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