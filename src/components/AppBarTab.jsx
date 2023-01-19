import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

//import Text from './Text';
import theme from '../theme';

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

const AppBarTab = ({ text, route }) => {
  return (
    <Link style={styles.tab} to={route}>
        <Text style={styles.text}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;