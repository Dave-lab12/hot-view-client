import { signIn } from "next-auth/react";

import Input from "./Input";
import Logo from "./Logo";
import Button from "./Button";
import Link from "./Link";
import Header from "./Header";

function Login() {
  return (
    <div className="bg-gray-300 overflow-hidden">
      <Header title="Login" />
      <main>
        <div className="grid place-items-center h-screen">
          <div className="flex flex-col items-center justify-center bg-gray-100 hover:scale-110 transition duration-150 transform ease-in-out hover:shadow-lg rounded-lg h-3/5 w-1/4 p-5">
            <Logo src="/hot-news-logo.png" logoClass="" />

            <Input
              inputName="email"
              inputType="email"
              inputClass="mt-6 mb-2 w-full"
              inputId="email"
            />

            <Input
              inputName="password"
              inputType="password"
              inputId="pass"
              inputClass="w-full"
            />

            <Button buttonType="submit" text="Login" buttonClass="mt-3 h-16" />
            <Link
              text="Forgot password"
              link="#"
              linkClass="place-self-end mt-2"
            />

            <h1 className="my-4">Or login with</h1>
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
                click={signIn}
              />
            </div>

            <h4 className="my-1">or</h4>
            <Link text="Sign up" link="#" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
