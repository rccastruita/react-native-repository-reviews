import { useMutation } from "@apollo/client";
import { useApolloClient } from "@apollo/client";

import { AUTHENTICATE_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(AUTHENTICATE_USER);


  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        username,
        password
      },
      onError: (error) => {
        console.log('error hook');
        console.log(error);
      },
    })

    await authStorage.setAccessToken(data.authenticate.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
}

export default useSignIn;