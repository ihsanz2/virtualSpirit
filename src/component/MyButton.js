import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const MyButton = ({onPress, children, style, textStyle, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 0.5,
    borderColor: '#e6e5e5',
  },
  text: {
    color: 'white',
  },
});

export default MyButton;
