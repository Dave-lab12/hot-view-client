import Input from "./Input"
function Login(){
    return (
        <div className="grid">
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