import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import {AppForm, AppFormField, SubmitButton} from '../components/Form';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  retypePassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .label('Phone Number'),
});

function RegisterScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{email: '', password: '', retypePassword: '', phone: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="retypePassword"
          placeholder="Retype Password"
          secureTextEntry
          textContentType="password"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="Phone"
          placeholder="Phone Number"
          secureTextEntry
          textContentType="telephoneNumber"
        />

        <SubmitButton title="Register" />
      </AppForm>

      <View style={styles.loginContainer}>
        <AppText style={styles.existingUser}>
          Existing User{' '}
          <AppText
            style={styles.loginLink}
            textColor='tertiary'
            backgroundColor='white'
            onPress={() => navigation.navigate('Login')}>
            Login
          </AppText>
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {padding: 10},
  existingUser: {color: colors.medium, fontSize: 20},
  loginContainer: {alignSelf: 'center', flexDirection:'row'},
  loginLink: { color: colors.tertiary, fontSize: 22, fontWeight: 'bold'},
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
});

export default RegisterScreen;
