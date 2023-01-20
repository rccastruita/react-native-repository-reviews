import { StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    flexDirection: 'row',
    flexGrow: 0,
  },
  // ...
});

const AppBar = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      <AppBarTab text={'Repositories'} route='/' />
      <AppBarTab text={'Sign-In'} route='/signin' />
    </ScrollView>);
};

export default AppBar;