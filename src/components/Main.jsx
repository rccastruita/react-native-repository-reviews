import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';

import RepositoryList from './RepositoryList';
import StyleTest from './StyleTest';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>

      <StyleTest />
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;