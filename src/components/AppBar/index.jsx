import { StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import useMe from '../../hooks/useMe';
import AppBarTab from './AppBarTab';
import SignOutTab from './SignOutTab';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarPrimary,
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
  },
});

const AppBar = () => {
  const { me } = useMe();

  return (
    <ScrollView horizontal style={styles.container}>
      <AppBarTab text={'Repositories'} route='/' />
      {
        me 
        ? <SignOutTab />
        : <AppBarTab text={'Sign-In'} route='/signin' />
      }
    </ScrollView>);
};

export default AppBar;