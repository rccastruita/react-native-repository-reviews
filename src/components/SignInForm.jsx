import { View, Pressable, StyleSheet } from 'react-native';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

import theme from '../theme';

const styles = StyleSheet.create({
  form: {
    marginTop: theme.margins.formTop,
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginHorizontal: theme.margins.formHorizontal,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: theme.fontWeights.bold,
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput 
        name="username"
        label="Username"
        placeholder="Username"
      />
      <FormikTextInput
        name="password"
        label="Password"
        placeholder="Password"
        secureTextEntry
      />
      <Pressable
        style={styles.button}
        onPress={onSubmit}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  )
};

export default SignInForm;