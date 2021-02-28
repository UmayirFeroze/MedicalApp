import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

function AppButton({backgroundColor="primary", textColor="white", title, onPress, ...otherProps}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, {backgroundColor:colors[backgroundColor]}]}>
      <Text style={[styles.text, {color: colors[textColor]}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:10
  },
  text: {color: colors.white, fontSize: 18, textTransform: 'uppercase'},
});

export default AppButton;
