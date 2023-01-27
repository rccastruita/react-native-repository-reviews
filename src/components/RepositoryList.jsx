import { FlatList, View, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import useRepositories from '../hooks/useRepositories';
import useAuthStorage from '../hooks/useAuthStorage';

import RepositoryItem from './RepositoryItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const [token, setToken] = useState('nulo');
  const authStorage = useAuthStorage();

  const fetchToken = async () => {
    const x = await authStorage.getAccessToken();
    setToken(x);
  }

  useEffect(() => {
    fetchToken();
  }, []);

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  return (
    <>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <RepositoryItem item={item} /> }
      />
      <Text>Token: {token}</Text>
    </>
  );
};

export default RepositoryList;