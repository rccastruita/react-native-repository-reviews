import { View, Pressable, StyleSheet, Text } from 'react-native';

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

const AppBarTab = ({ text }) => {
  return (
      <View style={styles.tab}>
    <Pressable>
        <Text style={styles.text}>{text}</Text>
    </Pressable>
      </View>
  );
};

export default AppBarTab;