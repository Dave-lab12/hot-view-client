import Input from "./Input"
import Logo from "./Logo"
import Button from "./Button"


function Login(){
    return (
        
        <div className="flex flex-col items-center justify-center bg-gray-100 hover:scale-110 transition duration-150 transform ease-in-out hover:shadow-lg rounded-lg h-3/5 w-1/5 p-5">

            <Logo 
                src="/hot-news-logo.png"
            />

            <Input 
                inputName="email"
                inputType="email"
                inputClass="mt-6"
            />

            <Input
                inputName="password"
                inputType="password"
            />

            <Button 
                buttonType="submit"
                text="Login"
                buttonClass="h-9 my-3"                
            />

            <h4>or</h4>

      </div>
    )

}

export default Login