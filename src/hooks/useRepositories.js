import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  //const [repositories, setRepositories] = useState();
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  const repositories = loading ? null : data.repositories;

  return { repositories, loading, refetch: refetch };
};

export default useRepositories;