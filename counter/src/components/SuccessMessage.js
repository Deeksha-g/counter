import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SuccessMessage = props => {
  const {value} = props;
  return (
    <View style={styles.messageSection}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageSection: {
    borderWidth: 1,
    borderColor: '#3289a8',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: 10,
  },
  text: {
    padding: 10,
    color: '#3269a8',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SuccessMessage;
