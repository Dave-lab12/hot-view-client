import Input from "./Input";
import Button from "./Button";
import Header from "./Header";
import Logo from "./Logo";

function SignUp() {
  return (
    <div className="bg-gray-300 overflow-hidden">
      <Header title="signup" />
      <main>
        <div className="grid place-items-center h-screen">
          <div className="grid place-items-center bg-gray-100 hover:scale-110 transition duration-150 transform ease-in-out hover:shadow-lg rounded-lg h-3/5 w-1/4 px-5">
            <Logo src="/hot-news-logo.png" />

            <div className="grid grid-cols-2">
              <h1 className="col-span-2 place-self-start text-sm ml-1 mb-2 text-orange-700 ">
                Fill the following form please
              </h1>

              <Input
                inputName="email"
                inputType="email"
                inputClass="mr-2 mb-2"
                inputId="email"
              />

              <Input inputName="phonenumber" inputType="number" inputId="pno" />

              <Input
                inputName="First name"
                inputType="text"
                inputId="firstName"
                inputClass="mr-2 mb-2"
              />

              <Input
                inputName="Last name"
                inputType="text"
                inputId="lastName"
              />

              <Input
                inputName="password"
                inputType="password"
                inputId="pass"
                inputClass="mr-2 mb-2"
              />

              <Input
                inputName="confirm password"
                inputType="password"
                inputId="pass2"
              />

              <Button
                buttonType="submit"
                text="sign up"
                buttonClass="col-span-2 place-self-center"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
