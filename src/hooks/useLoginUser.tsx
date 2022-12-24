import { useMutation } from "react-query";
import { useRouter } from "next/router";

import { loginUserFn } from "../utils/authApi";
import { LoginInput } from "../types/LoginInput";

<<<<<<< HEAD
<<<<<<< HEAD
export default function useLoginUser() {
=======
export default function useRegisterUser() {
>>>>>>> 2be418e (refactor: Renamed the useRegister file)
=======
export default function useLoginUser() {
>>>>>>> 5c06558 (refactor: Separated the hooks inside Signup)
  const router = useRouter();
  const mutation = useMutation(
    (userData: LoginInput) => loginUserFn(userData),
    {
      onSuccess: () => {
        router.push("/");
      },
    }
  );
  return mutation;
}
