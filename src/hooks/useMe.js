import { useQuery } from "@apollo/client";

import { ME } from "../graphql/queries";

const useMe = () => {
  const { data, loading, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  });

  const me = loading ? null : data.me;

  return { me, loading, refetch: refetch };

};

export default useMe;