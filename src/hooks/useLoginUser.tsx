import { useMutation } from "react-query";
import { useRouter } from "next/router";

import { loginUserFn } from "../utils/authApi";
import { LoginInput } from "../types/LoginInput";

<<<<<<< HEAD
export default function useLoginUser() {
=======
export default function useRegisterUser() {
>>>>>>> 2be418e (refactor: Renamed the useRegister file)
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
