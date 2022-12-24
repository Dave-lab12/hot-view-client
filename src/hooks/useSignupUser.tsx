import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { IUser } from "src/types/User";

import { signUpUserFn } from "../utils/authApi";

export default function useSignupUser() {
  const router = useRouter();
  const mutation = useMutation((userData: IUser) => signUpUserFn(userData), {
    onSuccess: () => {
      router.push("/login");
    },
  });

  return mutation;
}
