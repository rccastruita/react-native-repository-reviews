import { Formik } from 'formik';

import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(`Signing In with username: ${values.username} and password: ${values.password}`);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;