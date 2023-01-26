import { Formik } from 'formik';
import * as yup from 'yup';

import SignInForm from './SignInForm';
import useSignIn from '../hooks/useSignIn';
import AuthStorage from '../utils/authStorage';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const SignIn = () => {
  const [signIn, result] = useSignIn();

  const onSubmit = async (values) => {
    console.log(`Signing In with username: ${values.username} and password: ${values.password}`);
    
    const { username, password } = values;
    try {
      await signIn({ username, password});
      
      const authStorage = new AuthStorage();
      await authStorage.setAccessToken(result.data.authenticate.accessToken);

      const token = await authStorage.getAccessToken();
      console.log(`signed in: ${JSON.stringify(token)}`);
      
    } catch(e) {
      console.log('error signin');
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;