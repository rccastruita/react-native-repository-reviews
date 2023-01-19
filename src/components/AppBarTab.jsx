import { View, StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

//import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    //backgroundColor: theme.colors.primary,
    padding: 18,
  },
  text: {
    color: theme.colors.appBarSecondary,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  }
});

const AppBarTab = ({ text, route }) => {
  return (
      <View style={styles.tab}>
    <Link to={route}>
        <Text style={styles.text}>{text}</Text>
    </Link>
      </View>
  );
};

export default AppBarTab;