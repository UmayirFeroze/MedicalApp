import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import {AppForm, AppFormField, SubmitButton}  from '../components/Form';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{email: '', password: ''}}
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

        <SubmitButton title="Login" />

        <View style={styles.registerContainer}>
          <AppText style={styles.newUser}>
            New User{' '}
            <AppText
              style={styles.regsiterLink}
              onPress={() => console.log('regsiter')}>
              Register
            </AppText>
          </AppText>
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {padding: 10},
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  newUser: {
    color: colors.medium,
    fontSize: 20,
  },
  registerContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  regsiterLink: {
    color: colors.tertiary,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
