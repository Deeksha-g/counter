import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SuccessMessage = props => {
  const {value} = props;
  return (
    <View>
      {value === 60 ? (
        <Text style={styles.text}>successfully completed session 1</Text>
      ) : (
        <Text style={styles.text}>successfully completed session 2</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: '#3289a8',
    textAlign: 'center',
  },
});

export default SuccessMessage;
