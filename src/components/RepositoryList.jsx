import { FlatList, View, StyleSheet } from 'react-native';

import useRepositories from '../hooks/useRepositories';
import useMe from '../hooks/useMe';

import RepositoryItem from './RepositoryItem';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { me } = useMe();

  const { repositories } = useRepositories();

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
      <Text>{
        me ? `User: ${me.username}` : 'Not signed in'
      }
      </Text>
    </>
  );
};

export default RepositoryList;