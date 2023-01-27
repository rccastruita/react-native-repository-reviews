import { useMutation } from "@apollo/client";

import { AUTHENTICATE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }) => {
    await mutate({
      variables: {
        username,
        password
      },
      onError: (error) => {
        console.log('error hook');
        console.log(error);
      },
    })
  };

  return [signIn, result];
}

export default useSignIn;