import Input from "./Input";
import Button from "./Button";
import Logo from "./Logo";

function SignUp(){
    return (
        <div className="grid grid-cols-2 items-center justify-center bg-gray-100 hover:scale-110 transition duration-150 transform ease-in-out hover:shadow-lg rounded-lg h-3/5 w-1/4 p-5">

            <Logo 
                src="/hot-news-logo.png"
            />

            <Input 
                inputName="email"
                inputType="email"
                inputClass="mt-6"
            />

            <Input
                inputName="First name"
                inputType="text"
            />

            <Input
                inputName="Last name"
                inputType="text"
            />

            <Input
                inputName="password"
                inputType="password"
            />

            <Input
                inputName="confirm password"
                inputType="password"
            />

            <Input 
                inputName="phonenumber"
                inputType="number"
            />

      </div>
    )
}

export default SignUp