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
              <h1 className="col-span-2 place-self-center mb-2 text-orange-700 ">
                Fill the following form please
              </h1>

              <Input
                inputName="email"
                inputType="email"
                inputClass="mr-2 mb-2"
              />

              <Input inputName="First name" inputType="text" />

              <Input
                inputName="Last name"
                inputType="text"
                inputClass="mr-2 mb-2"
              />

              <Input inputName="password" inputType="password" />

              <Input
                inputName="confirm password"
                inputType="password"
                inputClass="mr-2 mb-2"
              />

              <Input inputName="phonenumber" inputType="number" />
            </div>

            <Button buttonType="submit" text="sign up" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
