import { useMutation } from "@apollo/client";

import { AUTHENTICATE_USER } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE_USER);

  const signIn = async ({ username, password }) => {
    await mutate({
      variables: {
        username,
        password
      },
      onError: (error) => {
        console.log(error);
      },
    })
  };

  return [signIn, result];
}

export default useSignIn;