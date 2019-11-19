import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';
import SimpleButton from './SimpleButton';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };
  decrementCounter = () => {
    if (this.state.counter >= 1) {
      this.setState(prevState => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  render() {

    return (
      <View style={styles.container}>
        <SimpleButton title="+" onPress={this.incrementCounter} />
        <Text>Counter value is: {this.state.counter}</Text>
        <SimpleButton title="-" onPress={this.decrementCounter} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

export default Counter;
