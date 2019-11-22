import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const SimpleButton = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 20,
    padding: 20,
  },
  text: {
    padding: 10,
  },
});

export default SimpleButton;
