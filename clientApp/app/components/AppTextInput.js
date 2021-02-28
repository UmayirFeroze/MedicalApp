import React from 'react';
import {Platform, StyleSheet, TextInput, View} from 'react-native';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

// Import and use icons here
// import {Icon} from 'react-native-elememts';
// import {} from 'react-native-vector-icons';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon}></View>}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {marginRight: 10},
});

export default AppTextInput;
