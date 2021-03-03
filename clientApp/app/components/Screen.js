import React from 'react';
import {
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

function Screen({children, ...otherProps}) {
  return (
    <SafeAreaView style={styles.screen} {...otherProps}>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
