import { useMutation } from "react-query";
import { useRouter } from "next/router";

import { loginUserFn } from "../utils/authApi";
import { LoginInput } from "../types/LoginInput";

export default function useLoginUser() {
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
