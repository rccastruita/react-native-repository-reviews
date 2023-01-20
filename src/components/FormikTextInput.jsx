import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  label: {
    marginLeft: theme.margins.formHorizontal,
    fontSize: theme.fontSizes.subheading,
  },
  field: {
    backgroundColor: 'white',
    padding: 6,
    marginHorizontal: theme.margins.formHorizontal,
    marginBottom: 15,
    
  }
});

const FormikTextInput = ({ name, label, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      {
        label &&
        <Text style={styles.label}>
          {label}
        </Text>
      }
      <TextInput
        style={styles.field}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}

        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;