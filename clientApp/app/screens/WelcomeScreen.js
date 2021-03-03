import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';

import AppButton from '../components/AppButton';



function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={8}
      source={require('../assets/welcomeBackground.jpg')}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.tagLine}>A React Native Learning</Text>
        {/* <AppText>Medicals at your service</AppText> */}
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton backgroundColor="black" style={styles.loginButton} title="Login" onPress={()=>navigation.navigate('Login')}/>
        <AppButton backgroundColor="white" style={styles.registerButton} textColor="black" title="Register" onPress={()=>navigation.navigate('Register')}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},
  buttonsContainer: {padding:20, width:"100%"},
  loginButton: {width: '100%', height: 70, backgroundColor: colors.black},
  logo: {width: 150, height: 150},
  logoContainer: {alignItems: 'center', position: 'absolute', top: 70},
  registerButton: {width: '100%', height: 70, backgroundColor: colors.white},
  tagLine:{color: colors.black, fontSize:20, fontWeight:"bold", paddingVertical:10}
});
export default WelcomeScreen;
