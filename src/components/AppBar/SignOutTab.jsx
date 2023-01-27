import { Pressable, Text, StyleSheet } from 'react-native';

import theme from '../../theme';
import useAuthStorage from '../../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  tab: {
    backgroundColor: theme.colors.appBarPrimary,
    padding: 15,
  },
  text: {
    color: theme.colors.appBarSecondary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    height: 22,
  }
});

const SignOutTab = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const onPress = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };
  
  return (
    <Pressable style={styles.tab} onPress={onPress}>
      <Text style={styles.text}>Sign Out</Text>
    </Pressable>
  );
};

export default SignOutTab;