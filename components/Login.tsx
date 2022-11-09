import Input from "./Input"
import Logo from "./Logo"
import Button from "./Button"
import Link from './Link'
// import { signIn } from "next-auth/react"

function Login(){
    function signIn(){
    
    }
    return (
        
        <div className="flex flex-col items-center justify-center bg-gray-100 hover:scale-110 transition duration-150 transform ease-in-out hover:shadow-lg rounded-lg h-3/5 w-1/4 p-5">

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
                buttonClass="h-9 mt-3"
            />

            <h1 className="my-2">Login with</h1>
            <div className="grid grid-cols-2 ">
                <Button
                    buttonType="button"
                    text="Google"
                    link="#"
                    buttonClass="mr-2 h-9 rounded-full"
                    click={signIn}
                />

                <Button
                    buttonType="button"
                    text="Facebook"
                    link="#"
                    buttonClass="h-9 rounded-full"
                    click={signIn}
                />
            </div>

            <h4 className="my-1">or</h4>
            <Link
                    text="Sign up"
                    link="#"
                />
            <Link
                text="Forgot password"
                link="#"
            />
      </div>
    )

}

export default Login