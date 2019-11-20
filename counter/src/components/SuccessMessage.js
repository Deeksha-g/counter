import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SuccessMessage = props => {
  const {value} = props;
  return (
    <View>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: '#3269a8',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SuccessMessage;
